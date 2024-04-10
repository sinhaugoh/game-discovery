import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ca7888d5e1a4b19b0fc0c334e410895",
  },
});
