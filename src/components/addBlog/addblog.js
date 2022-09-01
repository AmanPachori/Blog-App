import { useState } from "react";
import Navbar from '../Navbar/navbar'
import {Container,Button,Row,Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../App.css';

const Addblog = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [title, setTitle] = useState("");
   const [mainContent, setMainContent] = useState("");
   const [image,setimage] = useState("");

  return (
    <div>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='w-100'>
        <input type="text" className=" form-control" placeholder="Enter Category" aria-label="addTitle" aria-describedby="basic-addon1"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal> */}
        <Navbar/>
        <Container className="p-2 text-start">
         
        <h4 style={{color:'#fff'}}>Add Blog</h4>
        <div className="border rounded addblog p-5">
           <div className="my-2">
              <h5 style={{color:'#fff'}}>Title</h5>
              <input type="text" className=" form-control" placeholder="Enter title" aria-label="addTitle" aria-describedby="basic-addon1"/>
           </div>
           <div className="my-2">
              <h5 style={{color:'#fff'}}>Text</h5>
              <textarea type="text" className="textarea form-control" placeholder="Enter text here" aria-label="addTitle" aria-describedby="basic-addon1"/>
           </div>
           <div className="">
              <label style={{color:'#fff'}} for="formFile" class=" my-1 form-label"><h5>Upload Image</h5></label>
              <input class="form-control" type="file" id="formFile"/>
           </div>
           {/* <div className="categories p-1">
           <Button variant="outline-light" className="m-2 p-1 button float-start" >Category 1 <img src="https://img.icons8.com/ios-glyphs/23/FA5252/macos-close.png"/></Button>
           <Button variant="outline-light" className="m-2 p-1 button float-start" >Category 2 <img src="https://img.icons8.com/ios-glyphs/23/FA5252/macos-close.png"/></Button>
           
             
           </div> */}
           <div className=""> 
           <Button variant="outline-light" className="m-2 button float-end" >Publish</Button>
           {/* <Button variant="outline-light" onClick={handleShow} className="m-2 button float-end" >Add Category</Button> */}
           </div>
        </div>
        </Container>
    </div>
  )
}

export default Addblog