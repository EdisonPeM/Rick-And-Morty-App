import React from 'react';

import ListGrid from 'Components/Shared/ListGrid';
import CharactersFilters from 'Components/Characters/CharacterFilters';

import useInputControl from 'Hooks/useInputControl';
import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getCharacters } from 'Utils/Requester';

function Characters() {
  // Esta es la sección de la variable de estado Page y sus funciones
  const [page, handlePage] = useInputControl(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: '',
    status: '',
    species: '',
    gender: '',
  });
  const { data, loading, error, reFetch } = useFetch(
    () => getCharacters({ page, ...filters }),
    [page]
  );

  return (
    <>
      <input
        readOnly={loading}
        autoFocus
        type="number"
        value={page}
        onChange={handlePage}
      />
      <CharactersFilters
        readOnly={loading}
        inputs={filters}
        onChange={handleChange}
        onSubmit={handleSubmit(reFetch)}
      />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <ListGrid>
          {data.results.map(item => (
            <CharacterCard key={item.id} {...item} />
          ))}
        </ListGrid>
      )}
    </>
  );
}

export default Characters;
