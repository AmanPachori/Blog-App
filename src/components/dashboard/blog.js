import React ,{useState,useEffect} from 'react'
import Navbar from '../Navbar/navbar'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import '../../App.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Blog = () => {
const {id} = useParams();
const [myblogs,setmyBlogs] = useState([]);
const [title,setTitle]  = useState();
const [image,setImage] = useState();
const [mainContent,setMainContent] = useState();
const [category,setCategory] = useState([]);


const headers = {
  "Content-Type": "application/json",
};

useEffect(() => {
  GetBlogs();
}, []);

const GetBlogs = () => {
  axios
    .get(`http://localhost:8000/notes/get/${id}`, {
      headers,
    })
    .then((res) => {
      setTitle(res.data.data[0].title);
      setImage(res.data.data[0].image);
      setMainContent(res.data.data[0].mainContent);
      setCategory(res.data.data[0].category);
    })
    .catch((err) => {
      console.log(err);
    });
};
  
  return (
    <div>
        <Navbar/>
        <Container className="p-2">
        <h4 style={{color:'#fff'}} className='text-start'>Blog</h4>

          <Row className="Blogs">
            <Col className="blog border rounded  m-2 p-2">  
            <div className="p-2 container d-flex flex-column align-items-center justify-content-center">
            <h5 className="heading fs-3 fst-italic">{title}</h5>
            <img src={image} className="blogImage pt-5 img-fluid "></img>
            <p style={{color:'#fff'}} className="fs-5 pt-3 my-1 px-5">
            {mainContent}
            </p>
            </div>
            </Col>
            {/* <Col className="border text-start stats rounded m-2 p-2">
               <h4 class="fst-italic p-2">Stats</h4>
               <div class="m-2">
                  <h5 className="fst-italic">Total Blogs  - <span className="fst-italic fw-light fs-6">600</span></h5>
               </div>
               <div class="m-2">
                  <h5 className="fst-italic">Total Likes  - <span className="fst-italic fw-light fs-6">600</span></h5>
               </div>
               <div class="m-2">
                  <h5 className="fst-italic">Total Comments  - <span className="fst-italic fw-light fs-6">600</span></h5>
               </div>
            </Col> */}
          </Row>
        </Container>
    </div>
  )
}

export default Blog