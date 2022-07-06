import React, { useState } from 'react';
const { handleLocalStorage } = require('../component/localStorage');
const fetch = require('node-fetch');

export default function GetRandom(props) {
  const accessToken = localStorage.getItem('API_TOKEN');
  const [animal, setAnimal] = useState(() => {
    fetch(`https://api.petfinder.com/v2/animals?location=${props.location}&distance=30&limit=100`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        setAnimal(data.animals);
      });
  });
  const [current, setCurrent] = useState(0);
  if (animal) {
    const { photos } = animal[current];
    let photo = '/furever-paws.png';
    if (photos.length > 0) {
      const firstImage = photos[0];
      const { medium } = firstImage;
      photo = medium;
    }
    let leftArrow = 'fa-2x fa-solid fa-arrow-left';
    let rightArrow = 'fa-2x fa-solid fa-arrow-right';
    let iconLeftBorder = 'icon-arrow-border';
    let iconRightBorder = 'icon-arrow-border';
    if (current === 0) {
      leftArrow = 'hidden';
      iconLeftBorder = 'hidden';
    } else {
      leftArrow = 'fa-2x fa-solid fa-arrow-left';
      iconLeftBorder = 'icon-border';
    }
    if (current === 99) {
      rightArrow = 'hidden';
      iconRightBorder = 'hidden';
    } else {
      rightArrow = 'fa-2x fa-solid fa-arrow-right';
      iconRightBorder = 'icon-border';
    }
    return (
    <div className="w-100">
      <div className="col-lg-6 col-md-10 col-sm-12 mx-auto">
      <hr/>
      <div className="text-center">
        <a href="#">
          <h3 className="text-main">Location: {props.location}</h3>
        </a>
      </div>
        <hr/>
        <div className="mx-auto text-center">
          <div>
            <p className="text-main">Hi! I&apos;m {name}</p>
          </div>
          <div className="random-image-container">
              <img className="object-fit"src={photo}/>
          </div>
          <div className="my-1 text-center">
            <a href={`#detail?petId=${animal[current].id}`} className="text-main">More Detail</a>
          </div>
          <div className="d-flex justify-content-around mt-3">
            <div className={iconLeftBorder}>
              <i onClick={e => setCurrent(current - 1)} className={leftArrow}></i>
            </div>
            <div className="icon-border">
              <i onClick={e => location.reload()} className="fa-2x fa-solid fa-arrows-rotate"></i>
            </div>
            <div className="icon-border">
                <i id={animal[current].id} onClick={() => handleLocalStorage(animal[current])} className="fa-2x fa-solid fa-heart"></i>
            </div>
              <div className={iconRightBorder}>
              <i onClick={e => setCurrent(current + 1)} className={rightArrow}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
