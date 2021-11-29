const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    password: 'user1',
  },
  {
    username: 'user2',
    password: 'user2',
  },
  {
    username: 'user3',
    password: 'user3',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
