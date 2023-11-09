import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NewSightingForm from "./Components/NewSightingForm.jsx";
import Sighting from "./Components/Sighting.jsx";
import Home from "./Components/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

{
  /* Route that provides base app UI */
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Route that renders home content */}
      <Route index element={<Home />} />

      <Route path="new" element={<NewSightingForm />} />
      {/* Route that renders individual sightings */}
      <Route path="sightings/:sightingId" element={<Sighting />} />
      {/* Route that matches all other paths */}
      <Route path="*" element={"Nothing here!"} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
