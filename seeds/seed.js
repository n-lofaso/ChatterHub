const sequelize = require('../config/connection');
const { Interests, User, Post, Comment } = require('../model');

const interestData = require('./interestData.json')
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    
  //   const comments = await Comment.bulkCreate(commentData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // const posts = await Post.bulkCreate(postData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  
    for (const interests of interestData) {
      await Interests.create({
        ...interests,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();
  
