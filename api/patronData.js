import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createPatron = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Patron.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSinglePatron = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Patron/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updatePatron = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Patron/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSinglePatron = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Patron/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getPatrons = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Patron.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
        console.log(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  createPatron, updatePatron, getSinglePatron, deleteSinglePatron, getPatrons,
};
