import axios from "axios";

const WorldClock = axios.create({
  baseURL: "http://worldtimeapi.org/api/"
});

export default WorldClock;