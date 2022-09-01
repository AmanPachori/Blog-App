import React from 'react'
import Navbar from '../Navbar/navbar'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import '../../App.css'
const dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Container className="p-2">
        <h4 style={{color:'#fff'}} className='text-start'>Dashboard</h4>

          <Row>
            <Col className="border rounded col-lg-9 col-sm-7 m-2 p-2">  
               <Container>
                  <Row className="mx-auto d-flex justify-content-center">
                     <Col className="blog border-bottom  w-100 col-lg-5 m-2 col-sm-12 text-start">
                      <div className="p-2">
                         <h6 className="fs-5 fw-bold fst-italic"> Title of the blog</h6>
                           <p>
                              lorem's ddens in the ckssvdsk dv cdssxk fdjvsfkn iksnjfpsum dolor sit amet, consecteturv lorem ipsum dolor sit amet, consecteturv   lorem ipsum dolor sit amet, consecteturv lorem ipsum vul    sit amet       
                           </p>
                           <span className="m-2"><img src="https://img.icons8.com/material-rounded/27/FFFFFF/facebook-like--v1.png"/> 23</span>
                           <span className="m-2"><img src="https://img.icons8.com/material-rounded/24/FFFFFF/comments--v1.png"/> 23</span>
                      </div>
                     </Col>
                     <Col className="blog border-bottom  w-100 col-lg-5 m-2 col-sm-12 text-start">
                      <div className="p-2">
                         <h6 className="fs-5 fw-bold fst-italic"> Title of the blog</h6>
                           <p>
                              lorem's ddens in the ckssvdsk dv cdssxk fdjvsfkn iksnjfpsum dolor sit amet, consecteturv lorem ipsum dolor sit amet, consecteturv   lorem ipsum dolor sit amet, consecteturv lorem ipsum vul    sit amet       
                           </p>
                           <span className="m-2"><img src="https://img.icons8.com/material-rounded/27/FFFFFF/facebook-like--v1.png"/> 23</span>
                           <span className="m-2"><img src="https://img.icons8.com/material-rounded/24/FFFFFF/comments--v1.png"/> 23</span>
                      </div>
                     </Col>
                     <Col className="blog border-bottom  w-100 col-lg-5 m-2 col-sm-12 text-start">
                      <div className="p-2">
                         <h6 className="fs-5 fw-bold fst-italic"> Title of the blog</h6>
                           <p>
                              lorem's ddens in the ckssvdsk dv cdssxk fdjvsfkn iksnjfpsum dolor sit amet, consecteturv lorem ipsum dolor sit amet, consecteturv   lorem ipsum dolor sit amet, consecteturv lorem ipsum vul    sit amet       
                           </p>
                           <span className="m-2"><img src="https://img.icons8.com/material-rounded/27/FFFFFF/facebook-like--v1.png"/> 23</span>
                           <span className="m-2"><img src="https://img.icons8.com/material-rounded/24/FFFFFF/comments--v1.png"/> 23</span>
                      </div>
                     </Col>
                  </Row>
               </Container>
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

export default dashboard