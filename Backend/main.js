const express = require('express');
const expressRoutes = require('./routes/express_routes');

const app = express();
const port = 3001;

app.use('/', expressRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});