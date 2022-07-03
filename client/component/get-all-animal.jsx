// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

const ACCESS_TOKEN = localStorage.getItem('API_TOKEN');

export default function GetAllAnimal(props) {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch('https://api.petfinder.com/v2/animals?limit=100', {
      headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN
      }
    })
      .then(res => res.json())
      .then(data => {
        setPets(data);
      });
  }, [pets === []]);
  return pets;
}
