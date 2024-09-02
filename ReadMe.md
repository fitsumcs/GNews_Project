# News API
This is a simple Node.js API that interacts with the GNews API to fetch news articles. The project is structured using the MVC (Model-View-Controller) pattern, making it modular and easy to maintain.
The API includes methods to fetch N news articles with a search by keywords.

## How to Run

1. Clone this repository.
2. Install dependencies:
3. Create a .env File: Create a .env file in the root directory and add the following environment variables:
```env
   GNEWS_API_KEY=your_gnews_api_key_here
   GNEWS_API_URL=https://gnews.io/api/v4/search
   CACHE_TTL=3600
   PORT=3000
   ```

4. Start the server:

5. The API will be available at `http://localhost:3000`.

## API Endpoints

- **Fetch N news articles**: `/articles?query=example&max=5`
     The query is kind of topic E.g technology
     max is optional , default will be 10 articles 
## Caching

This API includes a simple caching mechanism to prevent redundant requests. Cached data is stored for 1 hour.




