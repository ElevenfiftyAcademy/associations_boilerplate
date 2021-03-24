const db = require('../db');

const UsersModel = require('./users');
const PostsModel = require('./posts');
const CommentsModel = require('./comments');

// associations will go below

module.exports = {
    dbConnection: db,
    models: {
        UsersModel,
        PostsModel,
        CommentsModel
    }
};