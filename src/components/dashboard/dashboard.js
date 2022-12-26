import { useState ,useEffect } from "react";
import React from 'react'
import Navbar from '../Navbar/navbar'
import Modal from 'react-bootstrap/Modal';

import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import '../../App.css'
import axios from 'axios';
const url = '';




const Dashboard = () => {

  useEffect(() => {
    GetBlogs();
    getUserData();
   },[]);

  const [myblogs,setmyBlogs] = useState([]);
  const [mydata,setmyData] = useState([]);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const [show1,setShow1] = useState(false);
  const [title1,setTitle1] = useState();
  const [mainContent, setMainContent] = useState();
  const [username1, setUsername1] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [address1, setAddress1] = useState();
  const [image, setimage] = useState();
  const [image1, setimage1] = useState();
  const [file,setfile] = useState(null);
  const[noteid,setnoteid] = useState();
  
  function encodeImageFileAsURL(element) {
    console.log(element);
    var file = element;
    var reader = new FileReader();
    reader.onloadend = function () {
       setimage(reader.result);
    };
    reader.readAsDataURL(file);
    return reader.result;
  }

  const token = localStorage.getItem('jwt');
  const userId = localStorage.getItem('id');
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token
    }
  }
  const handleClose = () => {
    setShow(false);
    axios.put(`http://localhost:8000/user/update/${userId}`,{
      username : username1,
      address:address1,
    })
    .then(()=>{
      getUserData();
       alert(`Successfully updated`);
    })
  };
  const handleClose1 = () => {
    console.log(noteid);
    setShow1(false);
    axios.put(`http://localhost:8000/notes/update/${noteid}`,{
      title:title1,
      mainContent:mainContent,
      image:image
    })
    .then(()=>{
       alert(`Successfully updated`);
    })
  };
  const handleClose2 = () => {
    setShow1(false);
    setShow(false);
  };
   const handleShow = () => setShow(true);
   const handleShow1 = (id) => {setShow1(true)
     myblogs[0]?.data.map((e)=>{
      if(e._id === id)
      {
        setnoteid(e._id);
        setTitle1(e.title);
        setMainContent(e.mainContent);
      }
     })
  };
  

  
  
  const GetBlogs = () =>{
    axios
      .get(`http://localhost:8000/notes/getuser/${userId}`,config )
      .then((res) => {
        let array = [res.data];
        setmyBlogs(array);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getUserData = ()=>{
    axios
      .get(`http://localhost:8000/user/get/${userId}`,config)
      .then((res) => {
        let array = [res.data];
        console.log(array);
        setmyData(array);
        setUsername(res.data.data[0].username);
        setAddress(res.data.data[0].address);
      })
      .catch((err) => {
        console.log(err);
      });

  }
   
  if(userId)
  {
    return (
      <div>
        <Modal className="text-white" show={show1} onHide={handleClose2}>
          <Modal.Header className="bg-dark" closeButton>
            <Modal.Title>Update Your Blog </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark w-100" >
            <h6 className='m-2'>Enter title</h6>
            <input
              type="text"
              value={title1}
              onChange={(e)=>{setTitle1(e.target.value)}}
              placeholder="username"
              className="form-control "
            />
            <h6 className='m-2'>Enter Address</h6>

            <textarea type="text" className="textarea form-control" value={mainContent} onChange={(e)=>{setMainContent(e.target.value)}} placeholder="Enter text here" aria-label="addTitle" aria-describedby="basic-addon1"/>
            <h6 className="m-2"> Upload Image</h6>
            <input class="form-control" type="file" value={file} id="formFile" onChange={(e)=>{encodeImageFileAsURL(e.target.files[0])}}/>
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button variant="primary" onClick={handleClose1}>
              Update Profile
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={show} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Complete your profile!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-100">
            <h6 className='m-2'>Enter Username</h6>
            <input
              type="text"
              value={username1}
              onChange={(e)=>{setUsername1(e.target.value)}}
              placeholder="username"
              className="form-control m-2"
            />
            <h6 className='m-2'>Enter Address</h6>

            <input
              type="text"
              value={address1}
              onChange={(e)=>{setAddress1(e.target.value)}}
              placeholder="Address"
              className="form-control m-2"
            />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Update Profile
            </Button>
          </Modal.Footer>
        </Modal>
        <Navbar />
        <Container className="p-2">
          <h4 style={{ color: "#fff" }} className="text-start">
            Dashboard
          </h4>

          <Row>
            <Col className="border rounded col-lg-9 col-sm-7 m-2 p-2">
              <Container>
                <Row className="mx-auto d-flex justify-content-center">
                  {
                    myblogs[0]?.data.map((e) => {
                       return (
                         <Col className="blog border-bottom  w-100 col-lg-5 m-2 col-sm-12 text-start">
                           <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                             <div className="header d-flex justify-content-between">
                               <h6 className="fs-3 fw-bolder fst-italic">
                                 {" "}
                                 {e.title}
                               </h6>
                               <button
                                 className="my-auto"
                                 onClick={() => {
                                  handleShow1(e._id);
                                }}
                               >
                                 <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/edit--v1.png" />
                               </button>
                             </div>

                             <img className="blogImage pt-5 img-fluid " src={e.image} />
                             <p className="p-2">{e.mainContent}</p>
                           </div>
                         </Col>
                       ); })
                  }
                  
                </Row>
              </Container>
            </Col>
            <Col className="text-start ">
              <div className="profile p-2 border rounded m-2">
                <div className="d-flex justify-content-between">
                  <h4 className="my-auto fst-italic p-2"> Profile</h4>
                  <button className="my-auto" onClick={handleShow}>
                    <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/edit--v1.png" />
                  </button>
                </div>
                {mydata[0]?.data.map((e) => {
        return (
          <div className="text-center">
            <div className="image">
            <img src="https://xsgames.co/randomusers/assets/images/favicon.png"></img>
            </div>
            <div class="m-2">
              <h5 className="fst-italic">
                Name -{" "}
                <span className="fst-italic fw-light fs-6">{e.username}</span>
              </h5>
            </div>
            <div class="m-2">
              <h5 className="fst-italic">
                Email -{" "}
                <span className="fst-italic fw-light fs-6">{e.email}</span>
              </h5>
            </div>
            <div class="m-2">
              <h5 className="fst-italic">
                Address -{" "}
                <span className="fst-italic fw-light fs-6">{e.address}</span>
              </h5>
            </div>
          </div>
        );
      })}
              </div>
              {/* <div className="stats border rounded m-2 p-2">
                <h4 class="fst-italic p-2">Stats</h4>
                <div class="m-2">
                  <h5 className="fst-italic">
                    Total Blogs -{" "}
                    <span className="fst-italic fw-light fs-6">600</span>
                  </h5>
                </div>
                <div class="m-2">
                  <h5 className="fst-italic">
                    Total Likes -{" "}
                    <span className="fst-italic fw-light fs-6">600</span>
                  </h5>
                </div>
                <div class="m-2">
                  <h5 className="fst-italic">
                    Total Comments -{" "}
                    <span className="fst-italic fw-light fs-6">600</span>
                  </h5>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  else{
    return (
      <h4 style={{ color: "#fff" }} className="text-center">
        Please Log in
      </h4>
    );
  }
  
}

export default Dashboard