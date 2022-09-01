import React from 'react'
import Navbar from '../Navbar/navbar'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const profile = () => {
  return (
    <div>
        <Navbar/>
           <Container className='user my-5 p-2'>
               <div>
                <div className='personalDetails'>
                 <img src='https://xsgames.co/randomusers/assets/images/favicon.png'></img>
                 <h6 className='fs-1'> Name of user</h6>
                 <h6 className='fw-lighter fs-6'> Address of the user </h6>
                </div>
                <div className='details my-5'>
                 <h6>Number of Blogs : 102</h6>
                 <h6>Likes : 320</h6>
                 <h6>Comments : 360</h6>
                </div>
               </div>
           </Container>

    </div>
  )
}

export default profile