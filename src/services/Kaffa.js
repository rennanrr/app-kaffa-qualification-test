import axios from "axios";

const Api = axios.create({
  baseURL: process.env.API_URL ? "https://api-kaffa-test.herokuapp.com/" : "http://localhost:3000/api/v1/"
});

export default Api;