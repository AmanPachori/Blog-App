import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import { Container } from "react-bootstrap";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { getUser } from "../../data/data";

const Profile = () => {
  const { id } = useParams();
  const [username, setusername] = useState(null);
  const [address, setaddress] = useState();
  const [email, setemail] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await getUser(id);
      console.log(data);
      setusername(data.data[0].username);
      setaddress(data.data[0].address);
      setemail(data.data[0].email);
    }
    fetchData();
  }, []);

  if (username === null || username === undefined) {
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
      <Container className="user my-5 p-2">
        <div>
          <div className="personalDetails">
            <img src="https://xsgames.co/randomusers/assets/images/favicon.png"></img>
            <h6 className="fs-1"> {username}</h6>
            <h6 className="fw-lighter fs-6">{address}</h6>
          </div>
          <div className="details my-5">
            <h6>Email : {email}</h6>
            <h6>Number of Blogs : 102</h6>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
