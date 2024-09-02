# News API

This is a simple Node.js API that interacts with the GNews API to fetch news articles. It includes basic methods to fetch N news articles, and search by keywords.

## How to Run

1. Clone this repository.
2. Install dependencies:
3. Create a `.env` file in the root directory with your GNews API key:
4. Start the server:

5. The API will be available at `http://localhost:3000`.

## API Endpoints

- **Fetch N news articles**: `/articles?query=example&max=5`

## Caching

This API includes a simple caching mechanism to prevent redundant requests. Cached data is stored for 1 hour.




