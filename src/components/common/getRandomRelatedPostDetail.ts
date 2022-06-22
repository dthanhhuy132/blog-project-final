

const getRandomRelatedPostDetail = (relatedPost:any) => {
  if(relatedPost.length <= 3 ) return relatedPost

  let randomNumber = []
  for (let i=0;i<relatedPost.length;++i) randomNumber[i]=i;

  function shuffle(array:number[]) {
    let tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

  randomNumber = shuffle(randomNumber).slice(0,3);
  const result = randomNumber.map((num:number) => relatedPost[num])
  return result
}

export default getRandomRelatedPostDetail