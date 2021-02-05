import React from 'react';
import usePageTitle from 'Hooks/usePageTitle';

import Locations from 'Containers/Locations';

function LocationsPage() {
  usePageTitle('Locations');

  return (
    <section className="container py-3">
      <h3 className="text-center">All Locations</h3>
      <Locations />
    </section>
  );
}

export default LocationsPage;
