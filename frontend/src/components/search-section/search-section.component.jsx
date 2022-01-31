import React from "react";
import {
  LeftSideContainer,
  SearchBarContainer,
  TweetCollectionsContainer,
} from "./search-section.styles";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { TwitterTweetEmbed } from "react-twitter-embed";

const SearchSection = () => {
  const [searchKey, setSearchKey] = useState("");
  const [ids, setIds] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);

  const handleTextFieldChange = (event) => {
    setSearchKey(event.target.value);
  };

  const handleClick = (event) => {
    const resultType = event.target.name;
    if (!searchKey) {
      alert("Enter a search key");
    } else {
      setIsFetchingData(true);
      axios
        .get("/api/tweets", {
          params: {
            searchKey,
            resultType,
          },
        }) // request will be proxy-ed to the server on port 4000 (defined in package.json)
        .then((response) => {
          if (resultType === "popular") {
            setIds([
              ...new Set( // remove duplicates in an array: https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
                response.data.statuses
                  .filter(
                    (status) =>
                      status.metadata.result_type === "popular" ||
                      status.user.followers_count > 10000
                  )
                  .map((status) => status.id_str)
              ),
            ]);
          } else {
            setIds([
              ...new Set(
                response.data.statuses
                  .filter((status) => status.metadata.result_type === "recent")
                  .map((status) => status.id_str)
              ),
            ]);
          }

          setIsFetchingData(false);
        })
        .catch((error) => console.log("there is an error: ", error.message));
    }
  };

  useEffect(() => {
    //
  }, []);

  return (
    <LeftSideContainer>
      <SearchBarContainer>
        <TextField
          id="outlined-basic"
          label="Enter a key"
          variant="outlined"
          size="small"
          value={searchKey}
          onChange={handleTextFieldChange}
        />
        <Button name="recent" variant="contained" onClick={handleClick}>
          Search recent
        </Button>
        <Button name="popular" variant="contained" onClick={handleClick}>
          Search popular
        </Button>
      </SearchBarContainer>
      {isFetchingData ? (
        <CircularProgress />
      ) : (
        <TweetCollectionsContainer>
          {ids && ids.map((id) => <TwitterTweetEmbed key={id} tweetId={id} />)}
        </TweetCollectionsContainer>
      )}
    </LeftSideContainer>
  );
};

export default SearchSection;
