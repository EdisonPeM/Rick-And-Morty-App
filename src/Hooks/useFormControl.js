import { useState } from 'react';

// Other Custom HOOK
function useFormControl(initialInputsValue) {
  const [state, setState] = useState(initialInputsValue);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = fn => e => {
    e.preventDefault();
    fn();
  };

  return [state, handleChange, handleSubmit];
}

export default useFormControl;
