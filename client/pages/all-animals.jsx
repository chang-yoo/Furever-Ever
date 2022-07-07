import React, { useState } from 'react';
const fetch = require('node-fetch');
const { getAccessToken } = require('../component/petfinder');
const { Loading } = require('../component/spinner');

export default function GetAllAnimal(props) {
  const [load, setLoad] = useState(true);
  const accessToken = localStorage.getItem('API_TOKEN');
  const [pets, setPets] = useState(() => {
    fetch(`https://api.petfinder.com/v2/animals?location=${props.location}&distance=30&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        setPets(data.animals);
        setLoad(false);
      });
  });
  if (props.location === '') {
    return (
    <div className="d-flex h-50 text-center flex-column justify-content-center align-items-center">
      <h3 className="text-main">Sorry,<br /> please check your location input <br />and try it again.</h3>
      <a href="#" className="text-black">Return Home</a>
    </div>
    );
  }
  if (accessToken === null) {
    getAccessToken();
  }
  if (pets !== undefined && load === false) {
    return (
      <div className="w-90 mx-auto mt-5">
        <div className="container-shadow pt-3 pt-3 d-flex flex-wrap justify-content-center mt-2 mb-2 w-100">
          {pets.map(eachPet => {
            let photo = '/furever-paws.png';
            if (eachPet.photos[0] !== undefined) {
              photo = eachPet.photos[0].medium;
            }
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 w-30 my-3 " key={eachPet.id}>
                <div className="d-flex justify-content-between">
                  <div className="border-radius-10 image-container-allanimal mx-auto w-90">
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
  return Loading();
}
