import axios from "axios";

const instance = axios.create({
  baseURL: "https://evangadiforumbackend-3-adp6.onrender.com/api/",
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});

export default instance;
