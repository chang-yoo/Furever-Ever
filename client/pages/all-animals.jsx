import React, { useState } from 'react';
const fetch = require('node-fetch');
const { getAccessToken } = require('../component/petfinder');

export default function GetAllAnimal(props) {
  const accessToken = localStorage.getItem('API_TOKEN');
  if (accessToken === null) {
    getAccessToken();
  }
  const [pets, setPets] = useState(() => {
    fetch(`https://api.petfinder.com/v2/animals?location=${props.location}&distance=30&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        setPets(data.animals);
      });
  });
  if (pets !== undefined) {
    return (
      <div className="w-90 mx-auto mt-5">
        <div className="container-shadow d-flex flex-wrap justify-content-center mt-2 mb-2 w-100">
          {pets.map(eachPet => {
            let photo = '/furever-paws.png';
            if (eachPet.photos[0] !== undefined) {
              photo = eachPet.photos[0].medium;
            }
            return (
              <div className="col-sm-6 col-xs-6 col-lg-3 col-md-4 w-100 m-0" key={eachPet.id}>
                <div className="w-100 d-flex">
              <div className="border-radius-10 image-container-allanimal m-0">
                <a href={`#detail?petId=${eachPet.id}`}>
                  <img className="object-fit border-radius-10" src={photo}></img>
                </a>
              </div>
              </div>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}
