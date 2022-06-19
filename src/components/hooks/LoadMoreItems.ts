import { useDispatch } from "react-redux";

export default function GetMoreItems(page:number, getMoreFunction:any) {
  const dispatch = useDispatch()
  dispatch(getMoreFunction(page))
}