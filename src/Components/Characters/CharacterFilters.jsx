import React from 'react';

function CharacterFilters({ inputs, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="name"
          placeholder="name"
          value={inputs.name}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="status" value={inputs.status} onChange={onChange}>
          <option value="">Seleccione una opcion</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        <input
          name="species"
          placeholder="species"
          value={inputs.species}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="gender" value={inputs.gender} onChange={onChange}>
          <option value="">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <button>Filtrar</button>
    </form>
  );
}

export default CharacterFilters;
