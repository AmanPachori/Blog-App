import { useState ,useEffect } from "react";
import React from 'react'
import Navbar from '../Navbar/navbar'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import '../../App.css'
import axios from 'axios';
const url = '';


const Dashboard = () => {
  const [myblogs,setmyBlogs] = useState([]);
  const userId = localStorage.getItem('id');
  useEffect(()=>{
    GetBlogs();
  },[])
  
  const GetBlogs = () =>{
    axios.get(`http://localhost:8000/notes/get/${userId}`)
    .then((res)=>{
      let array =[res.data];
      setmyBlogs(array);
      console.log(myblogs);
    })

    if(myblogs.length > 0)
    {
      return (
        myblogs[0].data.map((e)=>{
          return(
            <Col className="blog border-bottom  w-100 col-lg-5 m-2 col-sm-12 text-start">
            <div className="p-2">
              <h6 className="fs-5 fw-bold fst-italic">
                {" "}
                {e.title}
              </h6>
              <img src={e.image} />
              <p>
                {e.mainContent}
              </p>
              
            </div>
          </Col>
          )
        })
      )
    }


  }
   
  if(userId)
  {
    return (
      <div>
        <Navbar />
        <Container className="p-2">
          <h4 style={{ color: "#fff" }} className="text-start">
            Dashboard
          </h4>
  
          <Row>
            <Col className="border rounded col-lg-9 col-sm-7 m-2 p-2">
              <Container>
                <Row className="mx-auto d-flex justify-content-center">
                  {GetBlogs()}
                </Row>
              </Container>
            </Col>
            <Col className="text-start ">
              <div className="profile p-2 border rounded m-2">
                <div className="d-flex justify-content-between">
                  <h4 className="my-auto fst-italic p-2"> Profile</h4>
                  <button className='my-auto'><img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/edit--v1.png" /></button>
                </div>
                <div class="m-2">
                  <h5 className="fst-italic">
                    Name -{" "}
                    <span className="fst-italic fw-light fs-6">
                      Lorem someone
                    </span>
                  </h5>
                </div>
                <div class="m-2">
                  <h5 className="fst-italic">
                    Address -{" "}
                    <span className="fst-italic fw-light fs-6">
                      Lrgre rggre lorem rrrgorem someone
                    </span>
                  </h5>
                </div>
              </div>
              <div className="stats border rounded m-2 p-2">
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
              </div>
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
    )
  }
  
}

export default Dashboard