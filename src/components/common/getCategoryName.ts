import { iCategory } from "../interface";

export default  function getCategoryName(postCate:string[],allCategory:iCategory[] ) {
  let arr: iCategory[] = [];
  if (postCate&& allCategory) {
    postCate.map((item:string) => {
      allCategory.forEach((cate:iCategory) => {
        if (cate.slug === item) {
          arr.push(cate);
        }
      });
    });
  }
  return arr;
}