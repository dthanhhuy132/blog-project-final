import { iCategory } from "../interface";

export default  function getCategoryName(postCate:string[],allCategory:iCategory[] ) {
  let arr: iCategory[] = [];
  let randomCate;
  if (postCate && allCategory.length>0) {
    randomCate = postCate[
      Math.floor(postCate.length * Math.random())
    ];


    postCate.map((item:string) => {
      allCategory.forEach((cate:iCategory) => {
        if (cate.slug === item) {
          arr.push(cate);
        }
      });
    });
  }




  return {postCategorylist:arr, randomCate};
}