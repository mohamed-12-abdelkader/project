import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://daem.main-brains.com/",
});

export default baseUrl;
