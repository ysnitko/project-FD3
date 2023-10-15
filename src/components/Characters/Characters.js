import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import './Characters.css';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';

const Characters = ({ id }) => {
  const [charactersList, setChactersList] = useState([]);
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [characterId, setCharacterId] = useState(null);

  const handleMouseEnter = (charId) => {
    setToolTipVisible(true);
    setCharacterId(charId);
    console.log('enter');
  };

  const handleMouseLeave = () => {
    setToolTipVisible(false);
    console.log('leave');
  };

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
          {console.log(character.person.id)}
          <Link
            id="clickable"
            className="character-link"
            onMouseEnter={() => handleMouseEnter(character.person.id)}
            onMouseOutLeave={handleMouseLeave}
            data-tip={character.person.name}
          >
            {character.person.name}
          </Link>
          {toolTipVisible && characterId === character.person.id && (
            <Tooltip anchorSelect="#clickable" clickable place="top">
              <img
                src={character.person.image.medium}
                alt={character.person.id}
              />
            </Tooltip>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Characters;
