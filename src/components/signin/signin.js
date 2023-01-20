import React ,{useState} from 'react'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import Navbar from '../Navbar/navbar'
import { Link } from 'react-router-dom';
import '../../App.css'
import axios from 'axios';

const url = 'https://blog-app-backend-orpin.vercel.app/user/signin';
const Signin = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const submit = (e) =>{
    e.preventDefault();

    if(!email&&!password)
    {
      alert('Please enter your email and password');
    }
    else{
      axios.post(url,{
        email,
        password
      })
      .then((res) => {
        localStorage.setItem("jwt",res.data.token);
        localStorage.setItem("id",res.data._id);
        if(!res.data.token){
          alert("Please Login again");

        }
        else{
          window.location='./dashboard'
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
   
  return (
    <div >
      <Navbar/>
       <Container className='Signup shadow-lg p-5 my-5 rounded'>
         <Row>
          <Col className='Image d-flex align-items-center justify-content-center'>
           <img src='https://cdn.dribbble.com/users/1579322/screenshots/6587273/blue_boy_typing_nothought.gif'></img>
          </Col>
          <Col className='p-2 my-2'>
          <div className='p-2 Card text-start'>
          <h2>Sign In</h2>
          <form >
             <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                 <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} className="form-control"  />
             </div>
             <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" />
              </div>
             <button type="submit" onClick={submit} className="btn btn-primary my-2">Sign In</button>
             <br/>
             <Link className="p-2 Link"to='/signup'>Create an account ? Sign Up</Link>
          </form>
         </div>          
          </Col>
         </Row>
       </Container>
    </div>
  )
}

export default Signin