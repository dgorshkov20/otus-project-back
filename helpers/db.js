require('dotenv').config()
const mongoose = require('mongoose');

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@otus-course.mbz9oli.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbUrl, connectionOptions);

