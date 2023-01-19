import { useEffect, useState } from "react";
import { useParams, useSubmit } from "react-router-dom";
import axios from "axios";

function OnePlanet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

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
