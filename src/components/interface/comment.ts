export interface Comment {
  id: string,
  commentParentId: string,
  postId: string,
  userId: string,
  content: string,
  imageBase64: string,
  imageLink: string,
  isReport: false,
  reportQuantity: 0
}