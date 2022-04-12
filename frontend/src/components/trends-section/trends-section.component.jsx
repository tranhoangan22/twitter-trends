import React from "react";
import "./trends-section.css";
import { FaCrosshairs } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import {
  TrendsSectionContainer,
  MenuContainer,
  ContentContainer,
  SelectContainer,
  NearByContainer,
  NearByPlaceContainer,
  LocationSelectionContainer,
  CrossHairContainer,
} from "./trends-section.styles";

const TrendsSection = ({ showSearch }) => {
  const [trends, setTrends] = useState([]);
  const [woeid, setWoeid] = useState("1");
  const [nearbyPlace, setNearbyPlace] = useState("");

  // make API call to our backend
  const getTrends = useCallback(() => {
    axios
      .get("/api/trends", {
        params: {
          woeid,
        },
      }) // request will be proxy-ed to the server on port 4000 (defined in package.json)
      .then((response) => {
        setTrends(response.data[0].trends);
      })
      .catch((error) => console.log(error.message));
  }, [woeid]);

  // returns unordered list from the obtained array `trends`
  const listTrends = (trends) => {
    return trends ? (
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>
            <a href={trend.url} target="_blank" rel="noreferrer">
              {trend.name}
            </a>
            {trend.tweet_volume && (
              <span className="tweet_volume">{trend.tweet_volume}</span>
            )}
          </li>
        ))}
      </ul>
    ) : null;
  };

  useEffect(() => {
    getTrends();
  }, [woeid, getTrends]);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          axios
            .get("/api/near-me", {
              params: {
                lat: position.coords.latitude,
                long: position.coords.longitude,
              },
            })
            .then((response) => {
              setNearbyPlace(response.data[0].name);
              setWoeid(response.data[0].woeid);
            })
            .catch((error) => console.log(error.message));
        },
        (error) => console.log(error)
      );
    } else {
      alert("location not supported");
    }
  };

  return (
    <TrendsSectionContainer showSearch={showSearch}>
      <div className="App">
        <MenuContainer>
          <LocationSelectionContainer>
            <SelectContainer
              name="trending-place"
              id=""
              onChange={(event) => {
                setNearbyPlace(""); // when we select a place in dropdown we should not have the current place displayed
                setWoeid(event.target.value);
              }} // as soon as `woeid` changes, the function inside useEffect gets fired and then `trends` will be updated => UI is populated with corresponding trends
            >
              <option value="1">Worldwide</option>
              <option value="23424829">Germany</option>
              <option value="23424977">United States</option>
              <option value="23424975">United Kingdom</option>
            </SelectContainer>
            <CrossHairContainer onClick={handleLocation}>
              <FaCrosshairs />
            </CrossHairContainer>
          </LocationSelectionContainer>
          <NearByContainer>
            {nearbyPlace && (
              <NearByPlaceContainer>
                Latest trends near {nearbyPlace}
              </NearByPlaceContainer>
            )}
          </NearByContainer>
        </MenuContainer>
        <ContentContainer showSearch={showSearch}>
          {listTrends(trends)}
        </ContentContainer>
      </div>
    </TrendsSectionContainer>
  );
};

export default TrendsSection;
