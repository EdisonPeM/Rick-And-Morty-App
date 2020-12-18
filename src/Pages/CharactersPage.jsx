import React from 'react';
import usePageTitle from 'Hooks/usePageTitle';

import Characters from 'Containers/Characters';

function CharactesPage() {
  usePageTitle('Characters');

  return (
    <section className="container py-3">
      <h3 className="text-center">All Characters</h3>
      <Characters />
    </section>
  );
}

export default CharactesPage;
