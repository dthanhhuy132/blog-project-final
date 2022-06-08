export interface Post {
  userId: string;
  imageHeroBase64: string;
  imageHeroLink: string;
  title: string;
  summary: string;
  content: string;
  comment: number;
  love: number;
  isReport: boolean;
  reportQuantity: number;
  [key: string]: any;
}
