import React from 'react';

// import Title from 'Components/Header';
import Navbar from 'Components/Shared/Navbar';
import Characters from 'Containers/Characters';

import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    // Fragment <> </>
    <>
      <Navbar />
      <Characters />
    </>
  );
}

export default App;
