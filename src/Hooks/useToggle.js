import { useState } from 'react';

// CUSTOM HOOK
// TODOS LOS HOOKS DEBEN NOMBRARSE CON "use"
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}

export default useToggle;
