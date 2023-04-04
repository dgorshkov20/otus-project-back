require('rootpath')();
const cors = require('cors');
const express = require('express');
const userRouter = require('./users/users-controller')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/users', userRouter);

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

