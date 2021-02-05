import React, { useState } from 'react';

import ListGrid from 'Components/Shared/ListGrid';
import PaginationBar from 'Components/Shared/PaginationBar';

import CharactersFilters from 'Components/Characters/CharacterFilters';
import CharacterCard from 'Components/Characters/CharacterCard';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getCharacters } from 'Utils/Requester';

function Characters() {
  // Esta es la sección de la variable de estado Page y sus funciones
  const [page, setPage] = useState(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: '',
    status: '',
    species: '',
    gender: '',
  });
  const { data, loading, error } = useFetch(
    () => getCharacters({ page, ...filters }),
    [page] // Dependencias, al cambiar la variable de estado "page", se vuelve a hacer una nueva petición
  );

  const resetPage = () => {
    setPage(1); // Cambiar la viariable de estado "page"
  };

  return (
    <>
      <CharactersFilters
        readOnly={loading}
        inputs={filters}
        onChange={handleChange}
        onSubmit={handleSubmit(resetPage)}
      />
      <PaginationBar
        readOnly={loading}
        current={page}
        max={!(loading || error) ? +data.info.pages : 1}
        onChangePage={setPage}
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
