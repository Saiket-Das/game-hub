import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "80658659f8ac495fb05e1311a3ac198a",
  },
});
