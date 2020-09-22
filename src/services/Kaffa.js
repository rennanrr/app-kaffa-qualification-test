import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-kaffa-test.herokuapp.com/api/v1/"
});
export default Api;