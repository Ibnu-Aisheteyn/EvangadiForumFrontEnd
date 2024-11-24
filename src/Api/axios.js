import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5500/api/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default instance;
