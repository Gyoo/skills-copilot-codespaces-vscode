// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up comments
const comments = [{ name: 'John Doe', comment: 'Hello World!' }];

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Post comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Comment added');
});

// Listen to port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});