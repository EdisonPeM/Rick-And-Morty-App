import React from 'react';

import styles from './ListGrid.module.scss';

function ListGrid({ children }) {
  return <div className={`${styles.grid} py-3`}>{children}</div>;
}

export default ListGrid;
