# Backend

## Category Endpoints

Calls are made to the Bing News Search API: www.microsoft.com/en-us/bing/apis/bing-news-search-api

### GET /api/resources

Gets all news stories that match the "visual snow syndrome" query.

Should come in this shape:

<!-- ```json
{
  "filter": null,
	"limit": 25,
	"start": null,
	"status": 200,
	"error": false,
	"message": "Data found.",
	"total": "7 result(s) found.",
    "data": [
	    {
		    "_id": "c70bc8a8-17f3-4e55-b760-8d45dfd80897",
		    "category": "Fitness"
	    },
      ...
    ]
  }
``` -->

| Endpoint | Method | Description |

| `/api/resources` | GET | This endpoint returns an array of objects with all news stories about VSS |
