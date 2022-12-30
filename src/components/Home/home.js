import React ,{useState,useEffect} from 'react'
import Navbar from '../Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAllBlog } from '../../data/data';

import '../../App.css'



const Home = () => {
  const [myblogs,setmyBlogs] = useState(null);
    useEffect(() => {
    async function fetchData() {
      const data = await getAllBlog();
      setmyBlogs([data.data.data]);
    }
    fetchData();

  }, []);

  if(myblogs === null || myblogs ===undefined)
  {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Navbar />
      <Container className="Home p-2">
        <div className="filters m-2">
          <Container className="border rounded p-2 d-flex justify-content-center">
            <Button variant="outline-light" className="mx-2 button">
              All
            </Button>
            <Button variant="outline-light" className="mx-2 button">
              Tech
            </Button>
            <Button variant="outline-light" className="mx-2 button">
              Non Tech
            </Button>
            <Button variant="outline-light" className="mx-2 button">
              lipdum
            </Button>
          </Container>
        </div>
        <div className="blogs m-2">
          <Container className="">
            <Row>
              {myblogs[0]?.map((e) => {
                return (
                  <Col sm={6} md={4} lg={3} className="my-2">
                    <Card className="card homeCard">
                      <Card.Img className="img" variant="top" src={e.image} />
                      <Card.Body>
                        <Card.Text>
                          <Link
                            className="Link"
                            to={{
                              pathname: `blog/${e._id}`,
                            }}
                          >
                            {e.title}{" "}
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
}

export default Home