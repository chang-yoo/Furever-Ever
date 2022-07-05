import { useState } from 'react';
const fetch = require('node-fetch');

export default function GetRandom(props) {
  const accessToken = localStorage.getItem('API_TOKEN');
  // eslint-disable-next-line
  const [animal, setAnimal] = useState(()=>{
    fetch(`https://api.petfinder.com/v2/animals?location/${props.location}&type=cat&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        // eslint-disable-next-line
        console.log(data)
      });
  });
}
