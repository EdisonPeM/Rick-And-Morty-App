import React from 'react';
import usePageTitle from 'Hooks/usePageTitle';

function Home() {
  usePageTitle();

  return <div className="Jumbotron text-center">Este el home</div>;
}

export default Home;
