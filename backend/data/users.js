import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Amdin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Deepak Kumar',
    email: 'deepak@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rahul Kumar',
    email: 'rahul@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
