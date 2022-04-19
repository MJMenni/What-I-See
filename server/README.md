# Backend

## Category Endpoints

### GET /api/resources

Gets the top news stories on "visual snow syndrome" from the Bing News Search API (www.microsoft.com/en-us/bing/apis/bing-news-search-api)

Comes in this format:

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
```

### POST /api/login

Handles login from existing user and gets that user's data.

Comes in this format:

```json
{
  _id: new ObjectId("625e2257fc2ac0697491b75b"),
  email: 'LizardQueen@gmail.com',
  username: 'Lisa Simpson',
  stats: [
    {
      slider: [Object],
      audio: [Object],
      note: 'Apr-17-2022 –– It rained today, so I spent all day in my room reading and listening to jazz. Light visual snow and some body aches, but very mild symptoms overall. Possible triggers: none.'
    },
    {
      slider: [Object],
      audio: [Object],
      note: 'Apr-19-2022 –– Had really bad insomnia last night and felt tired all day. Visual snow, after-images, and brain fog were more intense than usual. Noticed my symptoms spiked after I got a B+ in gym. Possible triggers: lack of sleep, school-related stress.'
    }
  ]
}
```

### POST /api/signup

Creates a new account for a first-time user.

Comes in this format:

```json
{
  _id: new ObjectId("625ee6977d00c96ce4490954"),
  email: 'MyMomSaysImCool@gmail.com',
  username: 'MilhouseVH',
  stats: []
}
```

### PATCH /api/add-stats

Adds the current stats to an existing user's account.

Comes in this format:

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
  "note": "Apr-20-2022 –– Went on a road trip with the family. Experienced intense light sensitivity because of the sun and an increase in tinnitus due to dad’s loud music. Possible triggers: intense sunlight, loud music in the car, heightened stress due to brother being a brat."
}
```

### | Endpoint | Method | Description |

| `/api/resources` | GET | This endpoint returns an array of objects with news articles about VSS. The endpoint can be called in two ways: using the data stored in MongoDB, or directly with the Bing API. Toggle between the two to avoid unneccessary API calls. |

| `/api/login` | POST | This endpoint handles logins from existing users |

| `/api/signup` | POST | This endpoint handles new users and creates a new account |

| `/api/add-stats` | PATCH | This endpoint adds current stats to an existing user's account |
