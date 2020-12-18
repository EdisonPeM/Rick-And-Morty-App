import { useEffect } from 'react';

// Se utiliza en páginas
function usePageTitle(title) {
  useEffect(() => {
    document.title = `Rick & Morty App ${title ? `| ${title}` : ''}`;
  }, []);
}

export default usePageTitle;
