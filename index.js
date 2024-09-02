require('dotenv').config();
const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');

// Initialize Express app and NodeCache
const app = express();
const cache = new NodeCache({ stdTTL: 3600 }); // Cache TTL is set to 1 hour

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const GNEWS_API_URL = 'https://gnews.io/api/v4/search';

// Helper function to fetch articles from GNews API
const fetchArticles = async (query, maxArticles = 10) => {
    try {
        const response = await axios.get(GNEWS_API_URL, {
            params: {
                q: query,
                token: GNEWS_API_KEY,
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

// Route to fetch N news articles
app.get('/articles', async (req, res) => {
    const { query, max = 10 } = req.query;
    
    const cacheKey = `articles_${query}_${max}`;
    
    if (cache.has(cacheKey)) {
        return res.json(cache.get(cacheKey));
    }

    try {
        const articles = await fetchArticles(query, max);
        cache.set(cacheKey, articles);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
