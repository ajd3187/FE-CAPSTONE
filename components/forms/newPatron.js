import { useRouter } from 'next/router';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useAuth } from '../../utils/context/authContext';
import { createPatron, updatePatron } from '../../api/patronData';

const initialState = {
  name: '',
  image: '',
  office: '',
};

function NewForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [patrons, setPatrons] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  console.log(obj);
  // TODO: handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj && obj.firebaseKey) {
      // If obj.firebaseKey exists, it means we're updating an existing patron
      updatePatron({ ...formInput, firebaseKey: obj.firebaseKey }).then(() => {
        router.push('/');
      });
    } else {
      // If obj.firebaseKey doesn't exist, it means we're creating a new patron
      createPatron({ ...formInput, uid: user.uid }).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj && obj.firebaseKey ? 'Update' : 'Create'}  Patron </h2>
      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Patron Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>
      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      {/* ROLE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="office" className="mb-3">
        <Form.Control type="text" placeholder="office" name="office" value={formInput.office} onChange={handleChange} required />
      </FloatingLabel>

      {/* A WAY TO HANDLE UPDATES FOR TOGGLES, RADIOS, ETC  */}
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="status"
        name="status"
        checked={formInput.status}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            status: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj && obj.firebaseKey ? 'Update' : 'Create'} Patron </Button>
    </Form>
  );
}
NewForm.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    office: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

NewForm.defaultProps = {
  obj: initialState,
};

export default NewForm;
