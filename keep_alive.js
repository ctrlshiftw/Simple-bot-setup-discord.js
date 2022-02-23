const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('I am good now'));

app.listen(port, () => console.log(`I am good`));