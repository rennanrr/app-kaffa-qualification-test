import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-kaffa-test.herokuapp.com/"
});
export default Api;