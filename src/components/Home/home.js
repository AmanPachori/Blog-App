import React from 'react'
import Navbar from '../Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


import '../../App.css'



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Container  className="Home p-2">
            <div className="filters m-2">
              <Container className="border rounded p-2 d-flex justify-content-center">
                 <Button variant="outline-light" className="mx-2 button" >All</Button>
                 <Button variant="outline-light" className="mx-2 button" >Tech</Button>
                 <Button variant="outline-light" className="mx-2 button" >Non Tech</Button>
                 <Button variant="outline-light" className="mx-2 button" >lipdum</Button>
              </Container>
            </div>
            <div className="blogs m-2">
              <Container className="">
                <Row>
                  <Col sm={6} md={4} lg={3} className="my-2" > 
       <Card className='card'>
        <Card.Img variant="top" src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content <Link className='Link' to='/blog'> ....Read More</Link>
          </Card.Text>
        </Card.Body>
      </Card>  
      </Col>
                  <Col sm={6} md={4} lg={3} className="my-2" > 
       <Card className='card'>
        <Card.Img variant="top" src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content <Link className='Link' to='/blog'> ....Read More</Link>
          </Card.Text>
        </Card.Body>
      </Card>  
      </Col>
                  <Col sm={6} md={4} lg={3} className="my-2" > 
       <Card className='card'>
        <Card.Img variant="top" src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content <Link className='Link' to='/blog'> ....Read More</Link>
          </Card.Text>
        </Card.Body>
      </Card>  
      </Col>
                  <Col sm={6} md={4} lg={3} className="my-2" > 
       <Card className='card'>
        <Card.Img variant="top" src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content <Link className='Link' to='/blog'> ....Read More</Link>
          </Card.Text>
        </Card.Body>
      </Card>  
      </Col>
                  <Col sm={6} md={4} lg={3} className="my-2" > 
       <Card className='card'>
        <Card.Img variant="top" src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content <Link className='Link' to='/blog'> ....Read More</Link>
          </Card.Text>
        </Card.Body>
      </Card>  
      </Col>
                  <Col sm={6} md={4} lg={3} className="my-2" > 
       <Card className='card'>
        <Card.Img variant="top" src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content <Link className='Link' to='/blog'> ....Read More</Link>
          </Card.Text>
        </Card.Body>
      </Card>  
      </Col>
                  <Col sm={6} md={4} lg={3} className="my-2" > 
       <Card className='card'>
        <Card.Img variant="top" src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content <Link className='Link' to='/blog'> ....Read More</Link>
          </Card.Text>
        </Card.Body>
      </Card>  
      </Col>
                 
                </Row>
              </Container>
            </div>
        </Container>
    </div>
  )
}

export default Home