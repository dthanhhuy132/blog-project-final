export interface Post {
  id: string,
  userId: string,
  imageHeroBase64: string,
  imageHeroLink: string,
  createdAt: number,
  updatedAt?:number,
  title: string,
  slug?: string,
  summary: string,
  content: string,
  comment: number,
  love: number,
  isReport: boolean,
  reportQuantity: number,
  category: string[]
}
