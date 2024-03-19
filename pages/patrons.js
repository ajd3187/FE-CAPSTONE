import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { getPatrons } from '../api/patronData';
import { useAuth } from '../utils/context/authContext';
import PatronCard from '../components/PatronCards';
import NewForm from '../components/forms/newPatron';

function Home() {
  // TODO: Set a state for books
  const [patrons, setPatrons] = useState([]);
  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the members
  const getAllPatrons = () => {
    getPatrons(user.uid).then(setPatrons);
  };
  // TODO: make the call to the API to get all the members on component render
  useEffect(() => {
    getAllPatrons();
  }, []);

  return (
    <div className="text-center my-4">
      <NewForm />
      <div className="d-flex flex-wrap" style={{ justifyContent: 'space-evenly' }}>
        {/* TODO: map over members here using PatronCard component */}
        {patrons.map((patron) => (
          <PatronCard key={patron.firebaseKey} patronObject={patron} onUpdate={getAllPatrons} />
        ))}
      </div>

    </div>
  );
}

export default Home;
