import React from 'react';

import loadingGif from 'Assets/Images/loading.gif';

function Loading() {
  return (
    <div className="h-100 | d-flex flex-column | justify-content-center align-items-center">
      <img src={loadingGif} alt="loading" />
      <p className="text-muted">Loading...</p>
    </div>
  );
}

export default Loading;
