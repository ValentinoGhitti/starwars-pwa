import React from 'react';
import { CharacterData } from '../types/types';

interface CharacterCardProps {
  character: CharacterData;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p><strong>Height:</strong> {character.height}</p>
      <p><strong>Mass:</strong> {character.mass}</p>
      <p><strong>Hair Color:</strong> {character.hair_color}</p>
      <p><strong>Skin Color:</strong> {character.skin_color}</p>
      <p><strong>Eye Color:</strong> {character.eye_color}</p>
      <p><strong>Birth Year:</strong> {character.birth_year}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
    </div>
  );
};

export default CharacterCard;
