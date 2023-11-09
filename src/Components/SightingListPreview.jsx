import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SightingPreview from "./SightingPreview";
import { BACKEND_URL } from "../constants.jsx";

const SightingPreviewList = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    console.log("mounting SLP and calling sightings");
    axios.get(`${BACKEND_URL}/sightings`).then((response) => {
      console.log(response);
      setSightings(response.data);
    });
    // Only run this effect on component mount
  }, []);

  const sightingPreviews = sightings.map((sighting) => (
    <Link to={`/sightings/${sighting.id}`} key={sighting.id}>
      <SightingPreview data={sighting} />
    </Link>
  ));

  return <div>{sightingPreviews}</div>;
};

export default SightingPreviewList;
