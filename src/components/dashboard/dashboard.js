import { useState ,useEffect } from "react";
import React from 'react'
import Navbar from '../Navbar/navbar'
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import '../../App.css'
import axios from 'axios';
import { getUserBlog } from "../../data/data";
const url = '';




const Dashboard = () => {

  useEffect(() => {
    async function fetchData() {
      const data = await getUserBlog();

      setmyBlogs(data);
      getUserData()
    }
    fetchData();
   },[]);

  const [myblogs,setmyBlogs] = useState(null);
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
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const handleClose = () => {
    setShow(false);
    axios.put(`https://blog-app-backend-orpin.vercel.app/user/update/${userId}`,{
      username : username1,
      address:address1,
    },config)
    .then(()=>{
      getUserData();
       alert(`Successfully updated`);
    })
  };
  const handleClose1 = () => {
    setShow1(false);
    axios.put(`https://blog-app-backend-orpin.vercel.app/notes/update/${noteid}`,{
      title:title1,
      mainContent:mainContent,
      image:image
    },config)
    .then((res)=>{
      window.location.reload();
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
  


  const getUserData = ()=>{
    axios
      .get(`https://blog-app-backend-orpin.vercel.app/user/get/${userId}`,config)
      .then((res) => {
        let array = [res.data];
        setmyData(array);
        setUsername(res.data.data[0].username);
        setAddress(res.data.data[0].address);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  if (myblogs === null || myblogs === undefined) {
    return (
      <>
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>
        </div>
       
      </>
    );
  }

   
  if(userId)
  {
    return (
      <div className=" dashboard">
        <Modal className="text-white" show={show1} onHide={handleClose2}>
          <Modal.Header className="bg-dark" closeButton>
            <Modal.Title>Update Your Blog </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark w-100">
            <h6 className="m-2">Enter title</h6>
            <input
              type="text"
              value={title1}
              onChange={(e) => {
                setTitle1(e.target.value);
              }}
              placeholder="username"
              className="form-control "
            />
            <h6 className="m-2">Enter Address</h6>

            <textarea
              type="text"
              className="textarea form-control"
              value={mainContent}
              onChange={(e) => {
                setMainContent(e.target.value);
              }}
              placeholder="Enter text here"
              aria-label="addTitle"
              aria-describedby="basic-addon1"
            />
            <h6 className="m-2"> Upload Image</h6>
            <input
              class="form-control"
              type="file"
              value={file}
              id="formFile"
              onChange={(e) => {
                encodeImageFileAsURL(e.target.files[0]);
              }}
            />
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
            <h6 className="m-2">Enter Username</h6>
            <input
              type="text"
              value={username1}
              onChange={(e) => {
                setUsername1(e.target.value);
              }}
              placeholder="username"
              className="form-control m-2"
            />
            <h6 className="m-2">Enter Address</h6>

            <input
              type="text"
              value={address1}
              onChange={(e) => {
                setAddress1(e.target.value);
              }}
              placeholder="Address"
              className="form-control m-2"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Update Blog!!!
            </Button>
          </Modal.Footer>
        </Modal>
        <Navbar />
        <div className="px-5 py-2">
          <h3>Dashboard</h3>
        </div>
        <Container fluid className="d-flex">
          <Row className="p-5 py-2 w-100">
            <Col sm={12} md={7} lg={8} className=" p-3 dashboardBlogs">
              <Container>
                <Button variant="outline-light" className="mx-2 button align-items-center" href='/add'>
                   Add Blog
                </Button>
                <Row className="mx-auto d-flex justify-content-start">
                  {myblogs[0]?.data.map((e) => {
                    return (
                      <Col sm={12} md={12} lg={4} className="my-2">
                        <Card className="card homeCard">
                          <Card.Img
                            className="img"
                            variant="top"
                            src={e.image}
                          />
                          <Card.Body>
                            <Card.Text>
                              <div className="d-flex mb-3 userInfo align-items-center justify-content-between">
                                <div className="dateAndTime d-flex align-items-center justify-content-between">
                                  <img src="https://img.icons8.com/color/24/null/calendar--v1.png" />
                                  <h6 className="px-2 mt-2">
                                    {e.createdOn.toLocaleString(undefined, {
                                      timeZone: "Asia/Kolkata",
                                    })}
                                  </h6>
                                  <button
                                    className="my-auto border-0 bg-transparent"
                                    onClick={() => {
                                      handleShow1(e._id);
                                    }}
                                  >
                                    <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/edit--v1.png" />
                                  </button>
                                </div>
                              </div>
                              <Link
                                className="Link"
                                to={{
                                  pathname: `blog/${e._id}`,
                                }}
                              >
                                {e.title}
                              </Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Col>
            <Col
              sm={11}
              md={4}
              lg={3}
              className="text-start rounded profile mx-2 my-5 py-2"
            >
              <div className="">
                <div className="d-flex justify-content-between">
                  {" "}
                  <button className="my-auto" onClick={handleShow}>
                    <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/edit--v1.png" />
                  </button>
                </div>
                {mydata[0]?.data.map((e) => {
                  return (
                    <div className="text-center ">
                      <div className="image">
                        <img src="https://xsgames.co/randomusers/assets/images/favicon.png"></img>
                      </div>
                      <div class="m-2">
                        <h5 className="fst-italic">
                          Name -{" "}
                          <span className="fst-italic fw-light fs-6">
                            {e.username}
                          </span>
                        </h5>
                      </div>
                      <div class="m-2">
                        <h5 className="fst-italic">
                          Email -{" "}
                          <span className="fst-italic fw-light fs-6">
                            {e.email}
                          </span>
                        </h5>
                      </div>
                      <div class="m-2">
                        <h5 className="fst-italic">
                          Address -{" "}
                          <span className="fst-italic fw-light fs-6">
                            {e.address}
                          </span>
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