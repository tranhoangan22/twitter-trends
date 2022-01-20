import "./App.css";

const Trends = ({ trends }) => {
  return (
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
  );
};

export default Trends;
