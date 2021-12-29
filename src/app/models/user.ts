export class User {
  userId!:number;
  userName!:string;
  userEmail!:string;
  userPasswordSalt!:string;
  userPasswordHash!:string;
  userExp!:number;
  userLevel!:number;
  createTime!:Date | null;
  lastLogin!:Date | null;
  status!:boolean;
  money!:number;
}
