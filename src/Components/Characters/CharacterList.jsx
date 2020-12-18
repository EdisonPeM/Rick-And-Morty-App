import React from 'react';
import CharacterCard from './CharacterCard';

import styles from './CharactersList.module.scss';

function CharactersList({ items }) {
  return (
    <div className={`${styles.grid} py-3`}>
      {items.map(item => (
        <CharacterCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default CharactersList;
