import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page can't be found!</p>
      <Link to="/" className="not-found-link">
        <button className="btn">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
