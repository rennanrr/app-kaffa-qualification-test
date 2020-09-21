import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3000/api/v1/"
});

const WorldTime = axios.create({
  baseURL: "http://worldtimeapi.org/api/"
});

export default (Api, WorldTime);