const express = require('express');

const postRouter = require('./routes/post');
const db = require('./models');

const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('DB Connection Success!');
    })
    .catch(console.error);

app.get('/', (req, res) => {
    res.send('Hello Express!')
});

app.use('post', postRouter);

app.listen(3065, () => {
    console.log("Server is Running!");
});