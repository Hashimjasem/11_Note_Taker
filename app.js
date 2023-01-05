const express = require('express')
const app = express();
const webRouter = require('./routes/web')

const PORT = 3001;

app.use(webRouter)

app.listen(PORT, () => {
    console.log('app is running on http://localhost:' + PORT);
});