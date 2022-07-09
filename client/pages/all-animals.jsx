import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');
const { handleLocalStorage } = require('../component/localStorage');
const { GetAccessToken } = require('../component/petfinder');
const { Loading } = require('../component/spinner');
const { TryAgain } = require('../component/try-again');

export default function GetAllAnimal(props) {
  useEffect(() => {
    GetAccessToken();
  }, []);
  const [load, setLoad] = useState(true);
  const location = props.location;
  useEffect(() => {
    setLoad(true);
    fetch(`https://api.petfinder.com/v2/animals?location=${props.location}&distance=30&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        const { title } = data;
        if (title === 'Invalid Request') {
          setTryAgain(true);
        }
        setPets(data.animals);
        setLoad(false);
      });
  }, [location]);
  const accessToken = localStorage.getItem('API_TOKEN');
  const [tryAgain, setTryAgain] = useState(false);
  const [pets, setPets] = useState(() => {
    fetch(`https://api.petfinder.com/v2/animals?location=${props.location}&distance=30&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        const { title } = data;
        if (title === 'Invalid Request') {
          setTryAgain(true);
        }
        setPets(data.animals);
        setLoad(false);
      });
  });
  function handleCatButton(props) {
    setLoad(true);
    fetch(`https://api.petfinder.com/v2/animals?location=${location}&distance=30&type=cat&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        setPets(data.animals);
        setLoad(false);
      });
  }
  // eslint-disable-next-line
  function handleDogButton(props) {
    setLoad(true);
    fetch(`https://api.petfinder.com/v2/animals?location=${location}&distance=30&type=dog&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        setPets(data.animals);
        setLoad(false);
      });
  }
  if (props.location === '') {
    return (
    <div className="d-flex h-50 text-center flex-column justify-content-center align-items-center">
      <h3 className="text-main">Sorry,<br /> please check your location input <br />and try it again.</h3>
      <a href="#" className="text-black">Return Home</a>
    </div>
    );
  }
  if (pets !== undefined && load === false) {
    return (
      <div className="w-90 mx-auto mt-5">
        <div className="w-90 mx-auto">
          <div className="d-flex justify-content-between filter-container">
            <button className="w-25 cat-button text-white" onClick={handleCatButton}>
              CAT
            </button>
            <button className="w-25 dog-button text-white" onClick={handleDogButton}>
              DOG
            </button>
          </div>
        </div>
        <div className="container-shadow pt-3 pt-3 d-flex flex-wrap justify-content-center mt-2 mb-2 w-100">
          {pets.map(eachPet => {
            let photo = '/furever-placeholder.png';
            if (eachPet.photos[0] !== undefined) {
              photo = eachPet.photos[0].medium;
            }
            return (
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 w-30 my-3 " key={eachPet.id}>
                <div className="d-flex justify-content-between">
                  <div className="border-radius-10 image-container-allanimal mx-auto w-90">
                    <a href={`#detail?petId=${eachPet.id}`}>
                      <img className="object-fit border-radius-10" src={photo}></img>
                    </a>
                    <i onClick={() => handleLocalStorage(eachPet)} className="fa-xl fa-solid fa-heart"></i>
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
  if (tryAgain) {
    return TryAgain();
  }
  return Loading();
}
