const express = require('express');
const app = express();

app.use(express.json());
const sampleRouter = require('./route');


app.get('/', (req, res) => {
    res.send('Home page');
});

app.use('/sample', sampleRouter);

app.get('/about', (req, res) => {
    res.send('About page');
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});