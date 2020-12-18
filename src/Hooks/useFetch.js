import { useState, useEffect } from 'react';

// Custom Hook para pedir datos
function useFetch(fn, deps = []) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = () => {
    fn()
      .then(data => setState({ data, loading: false, error: null }))
      .catch(error => setState({ data: null, loading: false, error }));
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return { ...state, reFetch: fetchData };
}

export default useFetch;
