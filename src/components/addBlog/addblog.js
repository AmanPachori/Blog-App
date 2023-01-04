import { useEffect, useState } from "react";
import Navbar from '../Navbar/navbar'
import {Container,Button,Row,Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../App.css';
import axios from 'axios';
import { getUser } from '../../data/data';
const url = 'http://localhost:8000/notes/add';
const token = localStorage.getItem('jwt');
const config = {
  headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +token
  }
}
const userId  = localStorage.getItem("id");

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [image,setimage] = useState("");
  const [file,setfile] = useState(null);
  const [category, setCategory] = useState([]);
  const [categoryValues, setCategoryValues] = useState("");
  
    function encodeImageFileAsURL(element) {
      console.log(element);
      var file = element;
      var reader = new FileReader();
      reader.onloadend = function () {
        setimage(reader.result);
      };
      reader.readAsDataURL(file);
      return reader.result;
    }
  const submit = (e) =>{
    e.preventDefault();
    console.log(userId);
    if(!title&&!mainContent&&!image)
    {
      alert('Please enter your email and password');
    }
    else{
      axios.post(url,{
        title,
        mainContent,
        image,
        userId,
        category
      },config)
      .then((res) => {
        if(!res.data.success){
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

   const [show, setShow] = useState(false);
   const handleClose = () => {
     const array = category;
     array.push(categoryValues);
     const newarray = Array.from(new Set(array));
     setCategory(newarray);
     setCategoryValues("");
     setShow(false);
   };
   const handleShow = () => setShow(true);
   
   const removeCategory = (ele) =>{
    const array = category.filter(el=>{
      return el!= ele
    })
    setCategory(array);
   }
   const Categories = category.map((e) => {
     return (
       <div className="m-2 category shadow-lg p-2 mb-5 bg-body rounded float-start">
         {e}{" "}
         <button
           className="m-auto"
           onClick={() => {
             removeCategory(e);
           }}
         >
           <i class="bi bi-x-circle-fill"></i>
         </button>
       </div>
     );
   });
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="w-100">
          {/* <input type="text" value={categoryValues} onChange={(e)=>{setCategoryValues(e.target.value)}} placeholder="Enter Category" className='form-control' /> */}
          <select class="form-select" value={categoryValues} onChange={(e)=>{setCategoryValues(e.target.value)}} aria-label="Default select example">
            <option selected>Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Data Science">Data Science</option>
            <option value="Productivity">Productivity</option>
            <option value="Web development">Web development</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar />
      <Container className="p-2 text-start">
        <h4 style={{ color: "#fff" }}>Add Blog</h4>
        <div className="border rounded addblog p-5">
          <div className="my-2">
            <h5 style={{ color: "#fff" }}>Title</h5>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" form-control"
              placeholder="Enter title"
              aria-label="addTitle"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="my-2">
            <h5 style={{ color: "#fff" }}>Text</h5>
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
          </div>
          <div className="">
            <label
              style={{ color: "#fff" }}
              for="formFile"
              class=" my-1 form-label"
            >
              <h5>Upload Image</h5>
            </label>
            <input
              class="form-control"
              type="file"
              value={file}
              id="formFile"
              onChange={(e) => {
                encodeImageFileAsURL(e.target.files[0]);
              }}
            />
          </div>
          <div className="categories my-2">{Categories}</div>
          <div className="">
            <Button
              variant="outline-light"
              onClick={submit}
              className="m-2 button float-end"
            >
              Publish
            </Button>
            <Button
              variant="outline-light"
              onClick={handleShow}
              className="m-2 button float-end"
            >
              Add Category
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Addblog