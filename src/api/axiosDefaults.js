import axios from "axios";

axios.defaults.baseURL = "https://drf-socials-demo-2c6f48eda9f1.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
