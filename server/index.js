const express = require('express');
const userRouter = require('./routes/user.routes');
const mongoose = require('mongoose');


app.use('/users', userRouter);


const app = express();

app.use(express.json());
const db = mongoose.connect('mongodb://localhost:27017/db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response) => {
    console.log('Connected to the database...');
    return response;
});
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});