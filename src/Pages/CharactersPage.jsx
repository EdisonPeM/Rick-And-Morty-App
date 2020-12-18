import React from 'react';
import usePageTitle from 'Hooks/usePageTitle';

import Characters from 'Containers/Characters';

function CharactesPage() {
  usePageTitle('Characters');

  return <Characters />;
}

export default CharactesPage;
