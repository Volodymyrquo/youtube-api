import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDWDYysSOZ085M1KU784OB6USmd0SmZ5us",
  },
});
