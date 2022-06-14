const express = require('express');
const app = express();
const endpoint = "/notes";

app.use(endpoint, express.json());
app.use("/database", express.json());

var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
res.send("Culpa do Cliente");
});

app.listen(3000);
