import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePatron } from '../../api/patronData';
import NewForm from '../../components/forms/newPatron';

export default function EditPatron() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the patron data
  useEffect(() => {
    if (firebaseKey) {
      getSinglePatron(firebaseKey)
        .then((data) => {
          setEditItem(data);
        })
        .catch((error) => {
          console.error('Error fetching course data:', error);
        });
    }
  }, [firebaseKey]);

  return <NewForm obj={editItem} />;
}
