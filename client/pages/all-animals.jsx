import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

export default function GetAllAnimal() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem('API_TOKEN');
    fetch('https://api.petfinder.com/v2/animals?limit=100', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        setPets(data.animals);
      });
  // eslint-disable-next-line
  }, [pets===[]])
  // eslint-disable-next-line
  console.log(pets)
  if (pets !== []) {
    return (
      <div className="w-100 mx-auto">
        <div className="w-100 d-flex flex-wrap justify-content-center mt-2 mb-2">
          {pets.map(eachPet => {
            let photo = '/furever-paws.png';
            if (eachPet.photos[0] !== undefined) {
              photo = eachPet.photos[0].medium;
            }
            return (
              <div className="col-sm-6 col-lg-3 col-md-4 d-flex align-items-center h-auto justify-content-center image-container-allanimal m-2" key={eachPet.id}>
                <a href={`#detail?petId=${eachPet.id}`} id={eachPet.id}>
                  <img src={photo}></img>
                </a>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}