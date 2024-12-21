const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from the Backend!' });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});

