import axios from "axios";
import API_KEY from "./config";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: API_KEY,
    maxResults: 5,
    type: "video",
  },
});
