// eslint-disable-next-line
import React, { useState } from 'react';
const fetch = require('node-fetch');

const ACCESS_TOKEN = localStorage.getItem('API_TOKEN');

export default function getAllAnimal(props) {
  // eslint-disable-next-line
  const [pets, setPets] = useState([]);
  fetch('https://api.petfinder.com/v2/animals?limit=100', {
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN
    }
  })
    .then(res => res.json())
    .then(data => {
      // eslint-disable-next-line
      console.log(data)
    });
}
