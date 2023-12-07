import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f91b76b2dd4a4ec99477896bad0ea544'
  }
})