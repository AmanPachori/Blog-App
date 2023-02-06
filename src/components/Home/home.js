import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getAllBlog } from "../../data/data";

import "../../App.css";

const Home = () => {
  const [myblogs, setmyBlogs] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllBlog();
      setmyBlogs([data.data.data]);
    }
    fetchData();
  }, []);

  if (myblogs === null || myblogs === undefined) {
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
    <div className="Home">
      <Navbar />
      <Container className=" p-2 ">
        <div className="filters m-2">
          <Container className="border homeNavbar rounded p-2 d-flex justify-content-center">
            <Button variant="outline-light" className="mx-2 button">
              All
            </Button>
            <Button variant="outline-light" className="mx-2 button">
              Technology
            </Button>
            <Button variant="outline-light" className="mx-2 button">
              Data Science
            </Button>
            <Button variant="outline-light" className="mx-2 button">
              Productivity
            </Button>
            <Button variant="outline-light" className="mx-2 button">
              Web development
            </Button>
          </Container>
        </div>
        <div className="blogs m-2 ">
          <Container className="">
            <Row className="">
              {myblogs[0]?.map((e) => {
                return (
                  <Col sm={12} md={6} lg={4} className="my-2">
                    <Card className="card homeCard">
                      <Card.Img className="img" variant="top" src={e.image} />
                      <Card.Body>
                        <Card.Text>
                          <div className="d-flex mb-3 userInfo align-items-center justify-content-between">
                            {/* <div className="author d-flex align-items-center justify-content-between">
                              <img
                                className=""
                                src="https://blogbackend.pythonanywhere.com/media/profile/770073_man_512x512.png"
                              />
                              <h6 className="px-2 mt-2">Username</h6>
                            </div> */}
                            <div className="dateAndTime d-flex align-items-center justify-content-between">
                              <img src="https://img.icons8.com/color/24/null/calendar--v1.png" />
                              <h6 className="px-2 mt-2">
                                {e.createdOn.toLocaleString(undefined, {
                                  timeZone: "Asia/Kolkata",
                                })}
                              </h6>{" "}
                            </div>
                          </div>
                          <Link
                            className="Link"
                            to={{
                              pathname: `blog/${e._id}`,
                            }}
                          >
                            {e.title}
                          </Link>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Home;
