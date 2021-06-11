import axios from "axios";

const KEY = "AIzaSyAGGqYXoVju488_Euyz8Y7I-YwUBNW0Ci0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
