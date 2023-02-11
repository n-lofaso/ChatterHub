const User = require('./User');
const Interests = require('./Interests')
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Interests.hasMany(Post, {
//     foreignKey: 'interests_id'
// });

// Post.belongsTo(Interests, {
//     foreignKey: 'interests_id'
// });

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

module.exports = {User, Interests, Post, Comment};