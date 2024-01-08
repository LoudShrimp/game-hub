import axios from "axios";

export interface FetchResponse <T>{
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f91b76b2dd4a4ec99477896bad0ea544'
  }
})