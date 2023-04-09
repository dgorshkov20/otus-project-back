require('rootpath')();
const cors = require('cors');
const express = require('express');
const userRouter = require('./users/user-controller')
const errorHandler = require('./helpers/error-handler')
const jwt = require("./helpers/jwt");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(jwt());

app.use('/users', userRouter);

app.use(errorHandler);


const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

