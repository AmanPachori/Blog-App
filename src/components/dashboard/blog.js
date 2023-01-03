import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import { useParams } from "react-router-dom";
import { getBlog } from "../../data/data";

const Blog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState();
  const [mainContent, setMainContent] = useState();
  const [category, setCategory] = useState([]);
  const [Time,setTime] = useState();
  const [wortPerMin ,setWortPerMin] = useState();
  const countTime = () =>{
    const wordsPerMinute = 120;
    if(mainContent)
    {
      let textLength = mainContent.split(" ").length; // Split by words
      if(textLength > 0){
        let value = Math.ceil(textLength / wordsPerMinute);
          setWortPerMin(`~${value} min read`);
    }
  }
}

  useEffect(() => {
    async function fetchData() {
      const data = await getBlog(id);
      setTitle(data.data[0].title);
      setImage(data.data[0].image);
      setMainContent(data.data[0].mainContent);
      setCategory(data.data[0].category);
      console.log(data.data[0].category)
      setTime(data.data[0].createdOn);
    }
    fetchData();
  }, []);

  if (title === null || title === undefined) {
    return (
      <>
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>
        </div>
      </>
    );
  }
  return (
    <div>
      <Navbar />
      <Container className="">
        <Row className="Blogs">
          <Col className="blog col-12 rounded w-100 my-2 p-2">
            <div className="p-1 container d-flex flex-column align-items-center justify-content-center">
              <h5 className="heading fs-3 fst-italic">{title}</h5>
              <img src={image} className="blogImage pt-5 img-fluid "></img>
              <div className="w-100 p-2 px-3 mx-3 mt-2">
                <div className="d-flex mx-2 text-start m-1 userInfo align-items-center">
                  <div className="author d-flex align-items-center justify-content-between">
                    <img src="https://user-images.githubusercontent.com/84467090/210345936-00835c08-63bb-4137-8c93-b0d0c483b262.gif" />
                    <h6 className="px-2 mt-2">
                      {wortPerMin ? wortPerMin : countTime()}
                    </h6>
                  </div>
                  <div className="dateAndTime mx-2 d-flex align-items-center justify-content-between">
                    <img src="https://img.icons8.com/color/24/null/calendar--v1.png" />
                    <h6 className="px-2 mt-2">{Time}</h6>{" "}
                  </div>
                </div>
              </div>
              <div className="Category w-100 px-3 text-start">
                <div className="d-flex">
                  {category?.map((e) => {
                    return (
                      <div>
                        <p className="fs-6 mx-2 border p-2 rounded fw-bolder">{e}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p style={{ color: "#fff" }} className="pt-1 my-1 px-1">
                {mainContent}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
