const express = require('express');
const config = require('./config/config');
const { getArticles } = require('./controllers/newsController');

const app = express();
const PORT = config.getPort();

app.get('/articles', getArticles);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
