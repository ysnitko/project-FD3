import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import "./Characters.css";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

const Characters = ({ id }) => {
  const [charactersList, setChactersList] = useState([]);
  const [characterId, setCharacterId] = useState(null);

  const handleMouseEnter = (charId) => {
    setCharacterId(charId);
    console.log("enter");
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.tvmaze.com/shows/${id}?embed=cast`;
      const response = await fetch(url);
      const result = await response.json();
      setChactersList(result._embedded.cast);
    };
    fetchData();
  }, [id]);

  return (
    <div className="characters-list">
      {charactersList.map((character) => (
        <div key={character.person.id} className="character">
          <Link
            id="non-clickable"
            className="character-link"
            onMouseEnter={() => handleMouseEnter(character.person.id)}
            to={`/character/${character.person.id}`}
          >
            {character.person.name}
          </Link>
          <Tooltip anchorSelect="#non-clickable" place="top">
            {character.person.id === characterId && (
              <img
                className="tooltip-img"
                src={character.person.image?.medium}
                alt="actor"
              />
            )}
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Characters;
