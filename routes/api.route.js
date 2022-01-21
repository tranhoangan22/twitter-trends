const router = require("express").Router();
const Twitter = require("twitter");

// initialize a new twitter client
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
});

// get trending topics for a particular place
router.get("/trends", async (req, res, next) => {
  const id = req.query.woeid;

  try {
    // https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place
    const trends = await client.get("trends/place.json", {
      id,
    });

    res.send("hello");
  } catch (error) {
    next(error); // app.js already handles the error
  }
});

// get the WOEID for a particular location (lat, long)
router.get("/near-me", async (req, res, next) => {
  try {
    const { lat, long } = req.query;

    // https://developer.twitter.com/en/docs/twitter-api/v1/trends/locations-with-trending-topics/api-reference/get-trends-closest
    const response = await client.get("/trends/closest.json", {
      lat,
      long,
    });

    res.send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

/*

Twitter API endpoints: https://developer.twitter.com/en/docs/api-reference-index#twitter-api-standard

`GET trends/place`: https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place

*/
