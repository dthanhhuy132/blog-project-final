import axios from "axios";

const baseURL = 'https://let-share-jsonserver.herokuapp.com/api'

const api = axios.create({
  baseURL,
  headers: {
   "Content-Type": "application/json"
  }
})

export default api