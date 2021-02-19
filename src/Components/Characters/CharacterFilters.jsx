import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function CharacterFilters({ inputs, onChange, onSubmit, readOnly = false }) {
  return (
    <Form inline className="justify-content-center" onSubmit={onSubmit}>
      <FormControl
        readOnly={readOnly}
        className="mb-1 mr-sm-2"
        name="name"
        placeholder="name"
        value={inputs.name}
        onChange={onChange}
      />

      <FormControl
        readOnly={readOnly}
        className="mb-1 mr-sm-2"
        as="select"
        name="status"
        value={inputs.status}
        onChange={onChange}
      >
        <option value="">Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </FormControl>

      <FormControl
        readOnly={readOnly}
        className="mb-1 mr-sm-2"
        name="species"
        placeholder="species"
        value={inputs.species}
        onChange={onChange}
      />

      <FormControl
        readOnly={readOnly}
        className="mb-1 mr-sm-2"
        as="select"
        name="gender"
        value={inputs.gender}
        onChange={onChange}
      >
        <option value="">Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </FormControl>

      <Button type="submit" variant="secondary">
        Search
      </Button>
    </Form>
  );
}

export default CharacterFilters;
