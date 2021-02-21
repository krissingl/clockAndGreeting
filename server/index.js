const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
