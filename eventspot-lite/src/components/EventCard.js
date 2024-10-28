import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; 

const Card = styled.div`
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .highlight {
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 0.5rem;
    margin: 0.5rem 0; 
    font-weight: bold; 
  }

  .date {
    background: rgba(255, 255, 255, 0.4); 
    color: #ffcc00;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }

  .location {
    background: rgba(255, 255, 255, 0.4);
    color: #ff4d4d; 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }

  .icon {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 1rem auto;
  }
`;

const EventCard = ({ event, onClick }) => {
  return (
    <Card onClick={() => onClick(event)}>
      <h3>{event.name}</h3>
      <div className={`highlight date`}>
        <FaCalendarAlt className="icon" />
        <p>{event.date}</p>
      </div>
      <div className={`highlight location`}>
        <FaMapMarkerAlt className="icon" />
        <p>{event.location}</p>
      </div>
    </Card>
  );
};

export default EventCard;