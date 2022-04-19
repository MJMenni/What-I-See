# Backend

## Category Endpoints

API calls are made using the Bing News Search API: www.microsoft.com/en-us/bing/apis/bing-news-search-api

### GET /api/resources

Gets the top news stories that match the "visual snow syndrome" query.

Should come in this shape:

```json
news [
  {
    _id: new ObjectId("62535d5417e350c80ef29583"),
    name: 'The reason your sight may be clouded by what looks like white noise or static',
    url: 'https://www.msn.com/en-gb/health/medical/the-reason-your-sight-may-be-clouded-by-what-looks-like-white-noise-or-static/ar-AAW2TJ3',
    image: { thumbnail: [Object] },
    description: "Visual snow syndrome has been described as 'tinnitus for the eyes' and also has links to anxiety and depression",
    mentions: [ [Object], [Object], [Object] ],
    provider: [ [Object] ],
    datePublished: '2022-04-10T15:13:44.0000000Z'
  }
]
```

### POST /api/login

Description

Should come in this shape:

```json
// news [
//   {
//     _id: new ObjectId("62535d5417e350c80ef29583"),
//     name: 'The reason your sight may be clouded by what looks like white noise or static',
//     url: 'https://www.msn.com/en-gb/health/medical/the-reason-your-sight-may-be-clouded-by-what-looks-like-white-noise-or-static/ar-AAW2TJ3',
//     image: { thumbnail: [Object] },
//     description: "Visual snow syndrome has been described as 'tinnitus for the eyes' and also has links to anxiety and depression",
//     mentions: [ [Object], [Object], [Object] ],
//     provider: [ [Object] ],
//     datePublished: '2022-04-10T15:13:44.0000000Z'
//   }
// ]
```

### POST /api/signup

Description

Should come in this shape:

```json
// news [
//   {
//     _id: new ObjectId("62535d5417e350c80ef29583"),
//     name: 'The reason your sight may be clouded by what looks like white noise or static',
//     url: 'https://www.msn.com/en-gb/health/medical/the-reason-your-sight-may-be-clouded-by-what-looks-like-white-noise-or-static/ar-AAW2TJ3',
//     image: { thumbnail: [Object] },
//     description: "Visual snow syndrome has been described as 'tinnitus for the eyes' and also has links to anxiety and depression",
//     mentions: [ [Object], [Object], [Object] ],
//     provider: [ [Object] ],
//     datePublished: '2022-04-10T15:13:44.0000000Z'
//   }
// ]
```

| Endpoint | Method | Description |

| `/api/resources` | GET | This endpoint returns an array of objects with top news stories about VSS |

| `/api/get-stats` | GET | This endpoint returns all the stats for the current user |

| `/api/login` | POST | This endpoint handles logins from existing users |

| `/api/signup` | POST | This endpoint handles new users who are creating a new account |

| `/api/add-stats` | PATCH | This endpoint adds current stats to an existing user's account |
