require('dotenv').config();

// imports
const express = require('express');
const dbConnection = require('./db');
const controllers  = require('./controllers');

// instantiation
const app = express();

// middleware
app.use(express.json());

// endpoints
app.use('/auth', controllers.userscontroller);
app.use('/posts', controllers.postscontroller);
app.use('/comments', controllers.commentscontroller);

// database auth & sync
try {
    dbConnection
        .authenticate()
        .then(async () => await dbConnection.sync(/*  {force: true} */)) // force: true will drop all tables in pgAdmin and resync them. This is necessary after you make a change to a model, and need to sync any new table headers to the database.
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`[SERVER]: App is listening on ${process.env.PORT}`);
            });
        });
} catch (err) {
    console.log('[SERVER]: Server crashed');
    console.log(err);
}