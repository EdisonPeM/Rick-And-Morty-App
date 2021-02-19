import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from 'Hooks/usePageTitle';
import CharacterById from 'Containers/CharacterById';

function CharactersByIdPage() {
  const { characterId } = useParams();
  usePageTitle('Character Detail');

  return (
    <section className="container py-3">
      <CharacterById id={characterId} />
    </section>
  );
}

export default CharactersByIdPage;
