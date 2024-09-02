import React, { useEffect, useState } from 'react';
import { CharacterData } from '../types/types';

interface CharacterCardProps {
  character: CharacterData;
}

const getCharacterNumber = (url: string) => {
  const dataArray = url.split('/');
  return dataArray[dataArray.length - 2];
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const characterNumber = getCharacterNumber(character.url);
    const imageUrl = `/assets/characters/${characterNumber}.jpg`;
    setImageSrc(imageUrl);
  }, [character.url]);

  return (
    <div className="character">
      <div className="cardCharacter">
        <div className="face front">
          <img src={imageSrc} alt={character.name} />
          <h6>{character.name}</h6>
        </div>

        <div className="face back">
          <div className="mt-4">
            <h6>{character.name}</h6>
          </div>
          <small>Height: {character.height}cm</small>
          <small>Gender: {character.gender}</small>
          <small>Origin: {character.birth_year}</small>
          <small>Mass: {character.mass}kg</small>
          <div className="link status">
            <span className="m-2">{character.gender}</span>
            <span
              className={
                character.gender === 'male' ? 'bi bi-person-standing text-primary' :
                character.gender === 'female' ? 'bi bi-person-standing-dress text-danger' :
                character.gender === 'n/a' ? 'bi bi-robot text-warning' :
                ''
              }
            >
              <i className="fs-1"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
