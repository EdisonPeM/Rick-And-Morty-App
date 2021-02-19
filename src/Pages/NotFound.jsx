import React from 'react';
import usePageTitle from 'Hooks/usePageTitle';

function NotFound() {
  usePageTitle('404 - Page Not Found');

  return <div>Esta página No existe</div>;
}

export default NotFound;
