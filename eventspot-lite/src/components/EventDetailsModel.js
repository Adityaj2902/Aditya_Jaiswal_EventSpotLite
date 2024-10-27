import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

// Styled components for the modal background and content
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure modal is on top
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  position: relative; // For positioning the close button
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: red; // Change color on hover
  }
`;

const EventImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem; // Space between image and text
`;

const EventDetailsModal = ({ event, isOpen, onClose }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <ModalBackground onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {event && (
            <>
              <EventImage src={event.image} alt={event.name} />
              <h2>{event.name}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
            </>
          )}
        </ModalContent>
      </ModalBackground>
    </CSSTransition>
  );
};

export default EventDetailsModal;