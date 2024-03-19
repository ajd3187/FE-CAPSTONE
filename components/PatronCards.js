import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSinglePatron } from '../api/patronData';

function PatronCard({ patronObject, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE Author AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisPatron = () => {
    if (window.confirm(`Dou you want to Delete ${patronObject.name}?`)) {
      deleteSinglePatron(patronObject.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card
      style={{
        width: '18rem',
        margin: '10px',
        background: 'grey',
        boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
      }}
    >
      <Card.Img
        variant="top"
        src={patronObject.image}
        alt={patronObject.name}
        style={{
          height: '100%', width: '100%', boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)', objectFit: 'contain',
        }}
      />
      <Card.Body>
        <Card.Title>{patronObject.name}</Card.Title>
        <p className="card-text bold">
          {!patronObject.patron && (
            <span>
              RETIRED
              <br />
            </span>
          )}{' '}
          {patronObject.office}
        </p>
        {/* DYNAMIC LINK TO VIEW THE PATRON DETAILS  */}
        <Link href={`/${patronObject.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2" style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }}>
            VIEW
          </Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE Patron DETAILS  */}
        <Link href={`/edit/${patronObject.firebaseKey}`} passHref>
          <Button variant="info" style={{ boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)' }}>
            EDIT
          </Button>
        </Link>
        <Button variant="danger" style={{ boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)' }} onClick={deleteThisPatron} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

PatronCard.propTypes = {
  patronObject: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    office: PropTypes.string,
    firebaseKey: PropTypes.string,
    patron: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PatronCard;
