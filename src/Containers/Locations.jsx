import React from 'react';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getLocations } from 'Utils/Requester';

function Locations() {
  const [filters, setFilter, onSubmit] = useFormControl({
    name: '',
    dimension: '',
  });
  const { data, loading, error, reFetch } = useFetch(
    () => getLocations({ ...filters }),
    []
  );
  return <div></div>;
}

export default Locations;
