type User = {
  id: number;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  clearanceLevel: "Basic" | "Top Secret";
};

type MasterUser = User & {
  clearanceLevel: "Top Secret";
};

const user1: User = {
  id: 1,
  password: "123",
  email: "user1@gmail.com",
  createdAt: new Date(),
  updatedAt: new Date(),
  clearanceLevel: "Basic",
};

const user2: MasterUser = {
  id: 1,
  password: "123",
  email: "user1@gmail.com",
  createdAt: new Date(),
  updatedAt: new Date(),
  clearanceLevel: "Top Secret",
};

const listOfUsers: User[] = [];
