import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import './Characters.css';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';

const Characters = ({ id }) => {
  const [charactersList, setChactersList] = useState([]);
  const [toolTipVisible, setToolTipVisible] = useState(false);

  const handleMouseEnter = () => {
    setToolTipVisible(true);
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
          <Link
            id="clickable"
            className="character-link"
            // className="my-anchor-element"
            onMouseEnter={handleMouseEnter}
            onMouseOutLeave={handleMouseLeave}
            data-tip={character.person.name}
          >
            {/* <img src={character.person.image.medium} alt="" /> */}
            {character.person.name}
          </Link>
          {toolTipVisible && (
            <Tooltip anchorSelect="#clickable" clickable place="top">
              <img
                src="{character.person.image.medium}"
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
