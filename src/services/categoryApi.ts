import api from "./api"

export const categoryApi = {
  getCategory() {
    return api.get('/categories')
  }
}