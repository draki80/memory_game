const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const cards = require('./routes/api/cards');
app.use('/api/cards', cards);

const port = 5000;

app.listen(port, () => console.log(`Server running on ${port}`));