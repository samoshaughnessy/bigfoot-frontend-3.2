import { Link } from "react-router-dom";

import SightingListPreview from "./SightingListPreview";

const Home = () => {
  return (
    <div>
      <Link to="/new">Record New Sighting</Link>
      <br />
      <br />
      <SightingListPreview />
    </div>
  );
};

export default Home;
