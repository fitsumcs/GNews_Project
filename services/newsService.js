const NodeCache = require('node-cache');
const config = require('../config/config');
const { fetchArticlesFromAPI } = require('./httpService');

const cache = new NodeCache({ stdTTL: config.getCacheTTL() });

const fetchArticles = async (query, maxArticles) => {
    const cacheKey = `articles_${query}_${maxArticles}`;

    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    const articles = await fetchArticlesFromAPI(query, maxArticles);
    cache.set(cacheKey, articles);
    return articles;
};

module.exports = {
    fetchArticles
};
