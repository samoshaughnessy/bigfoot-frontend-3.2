import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { BACKEND_URL } from "../constants.jsx";

const Sighting = () => {
  const [sightingIndex, setSightingIndex] = useState();
  const [sighting, setSighting] = useState({});

  useEffect(() => {
    // If there is a sightingIndex, retrieve the sighting data
    if (sightingIndex) {
      console.log("getting data");
      axios
        .get(`${BACKEND_URL}/sightings/${sightingIndex}`)
        .then((response) => {
          console.log(response);
          setSighting(response.data);
        });
    }
    // Only run this effect on change to sightingIndex
  }, [sightingIndex]);

  // Update sighting index in state if needed to trigger data retrieval
  const params = useParams();
  if (sightingIndex !== params.sightingId) {
    console.log("setting params");
    setSightingIndex(params.sightingId);
  }

  // Store a new JSX element for each property in sighting details
  const sightingDetails = [];
  if (sighting) {
    for (const key in sighting) {
      sightingDetails.push(
        <Card.Text key={key}>{`${key}: ${sighting[key]}`}</Card.Text>
      );
    }
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <Card bg="light">
        <Card.Body>
          <Card.Title>
            {sighting &&
              `${sighting.YEAR} ${sighting.SEASON} ${sighting.MONTH}`}
          </Card.Title>
          {sightingDetails}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sighting;
