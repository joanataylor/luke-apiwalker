import { useEffect, useState } from "react";
import { useParams, useSubmit } from "react-router-dom";
import axios from "axios";

function OnePerson() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
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
      {person && (
        <div className="card-body">
          <h2>Name: {person.name}</h2>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Hair Color: {person.hair_color}</p>
          <p>Skin Color: {person.skin_color}</p>
        </div>
      )}
    </div>
  );
}

export default OnePerson;
