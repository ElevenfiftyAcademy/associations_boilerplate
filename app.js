require('dotenv').config();

const express = require('express');
const dbConnection = require('./db');

const app = express();

app.use(express.json());
// app.use(headers);

// endpoints

try {
    dbConnection
        .authenticate()
        .then(async () => await dbConnection.sync(/* {force: true} */)) // force: true will drop all tables in the database and reset them. This is necessary after you make a change to a model, and need to sync any new table headers to the database.
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`[SERVER]: App is listening on ${process.env.PORT}`);
            });
        });
} catch (err) {
    console.log('[SERVER]: Server crashed');
    console.log(err);
}