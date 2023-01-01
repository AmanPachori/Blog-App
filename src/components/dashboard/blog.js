import React ,{useState,useEffect} from 'react'
import Navbar from '../Navbar/navbar'
import {Container,Row,Col} from 'react-bootstrap';
import '../../App.css'
import { useParams } from 'react-router-dom';
import { getBlog } from '../../data/data';


const Blog = () => {
const {id} = useParams();
const [title,setTitle]  = useState(null);
const [image,setImage] = useState();
const [mainContent,setMainContent] = useState();
const [category,setCategory] = useState([]);

useEffect(() => {
  async function fetchData() {
    const data = await getBlog(id);
    setTitle(data.data[0].title);
    setImage(data.data[0].image);
    setMainContent(data.data[0].mainContent);
    setCategory(data.data[0].category);
  }
  fetchData();

}, []);

  if(title === null || title === undefined)
  {
    return(
      <>
      <div id="loader">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
    </>
    )

  }
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
            
          </Row>
        </Container>
    </div>
  )
}

export default Blog