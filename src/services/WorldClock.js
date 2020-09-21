import axios from "axios";

const WorldClock = axios.create({
  baseURL: "https://worldtimeapi.org/api/"
});

export default WorldClock;