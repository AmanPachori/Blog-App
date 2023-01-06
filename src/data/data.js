import axios from 'axios';
import { useState } from 'react';
const userId = localStorage.getItem('id');
const token = localStorage.getItem('jwt');

const headers = {
  "Content-Type": "application/json",
};
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
export const getAllBlog = async () => {
  const data = await axios
    .get(`http://localhost:8000/notes/get`, {
      headers,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getBlog = async (id) => {
  const data = await axios
  .get(`http://localhost:8000/notes/get/${id}`, {
    headers,
  })
  .then((res) => {
    return res.data;

  })
  .catch((err) => {
    console.log(err);
  });
  return data;

}

export const getUser = async (id) => {
  const data = await axios
  .get(`http://localhost:8000/user/get/${id}`, {
    headers,
  })
  .then((res) => {
    return res.data;

  })
  .catch((err) => {
    console.log(err);
  });
  return data;
}
export const getUserBlog = async (id) => {
  const data = await  axios
  .get(`http://localhost:8000/notes/getuser/${userId}`,config )
  .then((res) => {
    return [res.data];
  })
  .catch((err) => {
    console.log(err);
  });
  return data;
}
