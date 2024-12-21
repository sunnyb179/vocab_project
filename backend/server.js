const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// Define a basic route
app.get("/", (req, res) => {
    res.send("Hello from the Backend!");
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});

