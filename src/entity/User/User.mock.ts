import { User } from "./User";

export const mockUser: User = {
  userID: "123456",
  name: "John Doe",
  email: "john.doe@example.com",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockUsers: User[] = [
  mockUser,
  {
    userID: "223456",
    name: "John Doe 2",
    email: "john.doe2@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  { 
    userID: "323456",
    name: "John Doe 3",
    email: "john.doe3@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
