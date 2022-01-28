import React from "react";
import {
  LeftSideContainer,
  SearchBarContainer,
  TweetCollectionsContainer,
} from "./leftside.styles";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { TwitterTweetEmbed } from "react-twitter-embed";

const LeftSide = () => {
  const [searchKey, setSearchKey] = useState("");
  const [ids, setIds] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);

  const handleTextFieldChange = (event) => {
    setSearchKey(event.target.value);
  };

  const handleClick = () => {
    if (!searchKey) {
      alert("Enter a search key");
    } else {
      setIsFetchingData(true);
      axios
        .get("/api/tweets", {
          params: {
            searchKey,
          },
        }) // request will be proxy-ed to the server on port 4000 (defined in package.json)
        .then((response) => {
          setIds(response.data.statuses.map((status) => status.id_str));
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
        <Button variant="contained" onClick={handleClick}>
          Search
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

export default LeftSide;
