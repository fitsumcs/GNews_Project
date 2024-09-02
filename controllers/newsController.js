const { fetchArticles } = require('../services/newsService');

const getArticles = async (req, res) => {
    const { query, max = 10 } = req.query;

    try {
        const articles = await fetchArticles(query, max);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getArticles
};
