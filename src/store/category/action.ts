import { categoryApi } from "../../services/categoryApi";

export const GET_CATEGORY = 'GET_CATEGORY';

export function getCategoryList():any {
  return async (dispatch:any) => {
    try {
      const res = await categoryApi.getCategory()

      dispatch({
        type: GET_CATEGORY,
        payload: res.data
      })
    } catch (error) {
      console.log('Error get category', error)
    }
  }
}