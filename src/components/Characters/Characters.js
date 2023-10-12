import React, { useState, useEffect } from "react";
import "./Characters.css";

const Characters = ({ id }) => {
  const [charactersList, setChactersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.tvmaze.com/shows/${id}?embed=cast`;
      const response = await fetch(url);
      const result = await response.json();
      setChactersList(result._embedded.cast);
      console.log(result._embedded.cast);
    };
    fetchData();
  }, [id]);

  return (
    <ul className="characters-list">
      {charactersList.map((character) => (
        <li key={character.person.id} className="character">
          <img src={character.person.image.medium} alt="" />
          <span>{character.person.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Characters;
