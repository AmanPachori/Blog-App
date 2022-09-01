import React from 'react'
import Navbar from '../Navbar/navbar'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import '../../App.css'

const blog = () => {
  return (
    <div>
        <Navbar/>
        <Container className="p-2">
        <h4 style={{color:'#fff'}} className='text-start'>Dashboard</h4>

          <Row>
            <Col className="border rounded col-lg-9 col-sm-7 m-2 p-2">  
            <div className="p-2">
            <h5 className="heading fst-italic">Title of the blog</h5>
            <p className="text-start">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            </p>
            </div>
            </Col>
            <Col className="border text-start stats rounded m-2 p-2">
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
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default blog