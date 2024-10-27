import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const EventCard = ({ event, onClick }) => {
  return (
    <Card onClick={() => onClick(event)}>
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </Card>
  );
};

export default EventCard;