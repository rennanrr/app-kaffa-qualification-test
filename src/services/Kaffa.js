import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://api-kaffa-test.herokuapp.com/" : "http://localhost:3000/api/v1/"
});

export default Api;