import logo from "./twitter.svg";
import "./App.css";
import { FaCrosshairs } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [trends, setTrends] = useState([]);
  const [woeid, setWoeid] = useState("1");

  useEffect(() => {
    getTrends();
  }, [woeid]);

  // make API call to our backend
  const getTrends = () => {
    axios
      .get("/api/trends", {
        params: {
          woeid,
        },
      }) // request will be proxy-ed to the server on port 4000 (defined in package.json)
      .then((response) => {
        // console.log(response.data[0].trends);
        setTrends(response.data[0].trends);
      })
      .catch((error) => console.log(error.message));
  };

  // returns unordered list from the obtained array `trends`
  const listTrends = (trends) => {
    return trends ? (
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>
            <a href={trend.url}>{trend.name}</a>
            {trend.tweet_volume && (
              <span className="tweet_volume">{trend.tweet_volume}</span>
            )}
          </li>
        ))}
      </ul>
    ) : null;
  };

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter" />
        <h3>Twitter Trends</h3>
      </header>
      <div className="menu">
        <select
          name="trending-place"
          id=""
          onChange={(event) => setWoeid(event.target.value)} // as soon as `woeid` changes, the function inside useEffect gets fired and then `trends` will be updated => UI is populated with corresponding trends
        >
          <option value="1">Worldwide</option>
          <option value="23424829">Germany</option>
          <option value="23424977">United States</option>
          <option value="23424975">United Kingdom</option>
        </select>
        <div className="location" onClick={handleLocation}>
          <FaCrosshairs />
        </div>
      </div>
      <div className="content">{listTrends(trends)}</div>
    </div>
  );
};

export default App;
