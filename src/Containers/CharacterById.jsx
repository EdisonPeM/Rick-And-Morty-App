import React from 'react';

import useFetch from 'Hooks/useFetch';

import { getCharacterById } from 'Utils/Requester';

function CharacterById({ id }) {
  const { data, loading, error } = useFetch(() => getCharacterById({ id }), [
    id,
  ]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <div>{data.name}</div>
      )}
    </>
  );
}

export default CharacterById;
