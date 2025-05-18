export interface IUser {
  userID: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User implements IUser {
  readonly userID: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: IUser) {
    this.userID = user.userID;
    this.name = user.name;
    this.email = user.email;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
