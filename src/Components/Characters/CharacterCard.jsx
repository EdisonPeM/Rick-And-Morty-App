import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CharacterCard({
  id,
  name,
  status,
  species,
  gender,
  image,
  origin = {},
}) {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Img variant="top" src={image} alt={name} title={name} />
      <Card.Header>
        {name} ({status})
      </Card.Header>
      <Card.Body>
        <ul>
          <li>Species: {species}</li>
          <li>Gender: {gender}</li>
          <li>Origin: {origin.name}</li>
        </ul>
        <Button variant="secondary" as={Link} to={`/characters/${id}`}>
          Ver más Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
