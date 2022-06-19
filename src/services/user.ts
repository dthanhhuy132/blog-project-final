import { User } from "../components/interface/user";
import api from "./api";

const userApi = {
  getAllUser() {
    return api.get('/users')
  },
  register(params:User) {
    return api.post('/users', params)
  },

  getUserInfo({...params} = {}) {
   
    return api.get('/users', {params:params})
  }
}


export default userApi;