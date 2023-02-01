const User = require('./User');
const Interest = require('./Interests')
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

Interest.hasMany(Post, {
    foreignKey: 'post_id'
});

Post.belongsTo(Interest, {
    foreignKey: 'interest_id'
});

module.exports = {User, Interest, Post, Comment};