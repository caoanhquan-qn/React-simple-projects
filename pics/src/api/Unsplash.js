import axios from "axios";
import { KEY } from "../api/config";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 2500,
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});
export default unsplash;
