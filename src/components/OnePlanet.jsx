import { useEffect, useState } from "react";
import { useParams, useSubmit } from "react-router-dom";
import axios from "axios";

function OnePlanet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch(err => {
        setError(err);
        console.log("These aren't the droids you're looking for", err);
      });
  }, [id]);

  if (error) {
    return (
      <div>
        <h4>These aren't the droids you're looking for</h4>
        <img src="img/obi.jpeg" alt="error" />
      </div>
    );
  }

  return (
    <div className="card">
      {planet && (
        <div className="card-body">
          <h2>Name: {planet && planet.name}</h2>
          <p>Climate: {planet && planet.climate}</p>
          <p>Terrain: {planet && planet.terrain}</p>
          <p>Surface Water: {planet && planet.surface_water}</p>
          <p>Population: {planet && planet.population}</p>
        </div>
      )}
    </div>
  );
}

export default OnePlanet;
