import React , {useState} from 'react'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import Navbar from '../Navbar/navbar'
import { Link } from 'react-router-dom';
import '../../App.css'
import axios from 'axios';

const url = "https://blog-app-backend-orpin.vercel.app/user/signup"


const Signup = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(!email&&!password&&!username)
    {
      alert("Please enter your email and password");
    }
    else{
      axios.post(url,{
        username,
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
          <h2>Sign Up</h2>
          <form>
             <div className="mb-3">
                 <label htmlFor="Name"  className="form-label">Name</label>
                 <input type="text" value={username} name="username" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" id="Name" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                 <input type="email" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
              </div>
             <button type="submit" onClick={submit} className="btn btn-primary my-2">Sign Up</button>
             <br/>
             <Link className="p-2 Link" to='/signin'>Already have an account ? Sign In</Link>
</form>
         </div>          
          </Col>
         </Row>
       </Container>
    </div>
  )
}

export default Signup