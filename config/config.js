require('dotenv').config();

class Config {
    constructor() {
        this.GNEWS_API_KEY = process.env.GNEWS_API_KEY;
        this.GNEWS_API_URL = process.env.GNEWS_API_URL;
        this.CACHE_TTL = parseInt(process.env.CACHE_TTL) || 3600; // Default to 3600 seconds (1 hour)
        this.PORT = parseInt(process.env.PORT) || 3000; // Default to port 3000
    }

    getGNewsApiKey() {
        return this.GNEWS_API_KEY;
    }

    getGNewsApiUrl() {
        return this.GNEWS_API_URL;
    }

    getCacheTTL() {
        return this.CACHE_TTL;
    }

    getPort() {
        return this.PORT;
    }
}

module.exports = new Config();
