import React from 'react';
import CharacterCard from './CharacterCard';

import styles from './CharactersList.module.scss';

function CharactersList({ items }) {
  return (
    <div className="container">
      <h3>Lista de Personajes</h3>
      <div className={styles.grid}>
        {items.map(item => (
          <CharacterCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CharactersList;
