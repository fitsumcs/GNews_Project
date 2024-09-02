const axios = require('axios');
const config = require('../config/config');

const fetchArticlesFromAPI = async (query, maxArticles = 10) => {
    try {
        const response = await axios.get(config.getGNewsApiUrl(), {
            params: {
                q: query,
                token: config.getGNewsApiKey(),
                max: maxArticles,
                lang: 'en',
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw new Error('Could not fetch articles');
    }
};

module.exports = {
    fetchArticlesFromAPI
};
