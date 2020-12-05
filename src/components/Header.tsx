import React from 'react';

import './Header.scss';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => (
  <h1 className="title">{title}</h1>
);

export default Header;
