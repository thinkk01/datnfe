import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:8030",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Instance;
