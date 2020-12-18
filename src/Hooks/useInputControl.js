import { useState } from 'react';

// CUSTOM HOOK
// TODOS LOS HOOKS DEBEN NOMBRARSE CON "use"
function useInputControl(initialValue = '') {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return [inputValue, onChange];
}

export default useInputControl;
