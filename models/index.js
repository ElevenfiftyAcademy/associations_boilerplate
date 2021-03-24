const db = require('../db');

const UsersModel = require('./users');
const PostsModel = require('./posts');
const CommentsModel = require('./comments');

// associations will go below
UsersModel.hasMany(PostsModel);
UsersModel.hasMany(CommentsModel);

PostsModel.belongsTo(UsersModel);
PostsModel.hasMany(CommentsModel);

CommentsModel.belongsTo(PostsModel);

module.exports = {
    dbConnection: db,
    models: {
        UsersModel,
        PostsModel,
        CommentsModel
    }
};