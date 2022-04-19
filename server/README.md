# Backend

## Category Endpoints

### GET /api/resources

Gets the top news stories on "visual snow syndrome" from the Bing News Search API (www.microsoft.com/en-us/bing/apis/bing-news-search-api)

Should come in this shape:

```json
{
	"status": 200,
	"message": "news fetched",
	"data": {
		"value": [
			{
				"_id": "62535d5417e350c80ef29583",
				"name": "The reason your sight may be clouded by what looks like white noise or static",
				"url": "https://www.msn.com/en-gb/health/medical/the-reason-your-sight-may-be-clouded-by-what-looks-like-white-noise-or-static/ar-AAW2TJ3",
				"image": {
					"thumbnail": {
						"contentUrl": "https://www.bing.com/th?id=OVFT.Ara7JnGemdJRNZBCcq7zaC&pid=News",
						"width": 700,
						"height": 367
					}
				},
				"description": "Visual snow syndrome has been described as 'tinnitus for the eyes' and also has links to anxiety and depression",
				"mentions": [
					{
						"name": "Reason"
					},
					{
						"name": "White noise"
					},
					{
						"name": "Western Mail"
					}
				],
				"provider": [
					{
						"_type": "Organization",
						"name": "Wales Online on MSN.com",
						"image": {
							"thumbnail": {
								"contentUrl": "https://www.bing.com/th?id=ODF.lVPjCN3LmTro40TL-cwcLg&pid=news"
							}
						}
					}
				],
				"datePublished": "2022-04-10T15:13:44.0000000Z"
			}
      ... }
```

### POST /api/login

Description

Should come in this shape:

```json
// {
//   "status": 200,
//   "data": {
//     "_id": "625ed9f02c93c66cb1d5123b",
//     "email": null,
//     "username": null,
//     "stats": []
//   }
// }
```

### POST /api/signup

Description

Should come in this shape:

```json
{
  "status": 200,
  "data": {
    "_id": "625ed9f02c93c66cb1d5123b",
    "email": null,
    "username": null,
    "stats": []
  }
}
```

### PATCH /api/add-stats

Description

Should come in this shape:

```json
{
  "slider": { "size": 3, "speed": 2, "opacity": 6, "halo": 3 },
  "audio": {
    "Static": false,
    "Roaring": true,
    "Buzzing": true,
    "Kettle": false,
    "Electric": false,
    "Screeching": false
  },
  "note": "Apr-20-2022 – Intense after-images and light sensitivity, especially when walking through the mall. Noticed static, tinnitus, and floaters increased as the day went on. Possible triggers include work-related stress, exposure to intense lighting, and too much screen time."
}
```

| Endpoint | Method | Description |

| `/api/resources` | GET | This endpoint returns an array of objects with top news stories about VSS. The endpoint can be called in two ways: using the data stored in MongoDB, or directly with the Bing API. Toggle between the two to avoid unneccessary API calls. |

| `/api/login` | POST | This endpoint handles logins from existing users |

| `/api/signup` | POST | This endpoint handles new users who are creating a new account |

| `/api/add-stats` | PATCH | This endpoint adds current stats to an existing user's account |
