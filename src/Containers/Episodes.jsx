import React from 'react';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getEpisodes } from 'Utils/Requester';

function Episodes() {
  const [filters, setFilter, onSubmit] = useFormControl({
    name: '',
    episodes: '',
  });
  const { data, loading, error, reFetch } = useFetch(
    () => getEpisodes({ ...filters }),
    []
  );
  return <div></div>;
}

export default Episodes;
