const { Post } = require('../models');

const postData = [
  {
    title: 'title1',
    content: 'content1',
    user_id: 1,
  },
  {
    title: 'title2',
    content: 'content2',
    user_id: 2,
  },
  {
    title: 'title3',
    content: 'content3',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
