export interface User {
  id: string;
  username: string;
  userFirstName: string;
  userLastName: string;
  userDescription: string;
  isAdmin: boolean;
  isMainAdmin: boolean;
  userPassword: string;
  avatarBase64: string;
  avatartLink: string;
  coverBase64: string;
  coverLink: string;
  musicLink: string; 
}