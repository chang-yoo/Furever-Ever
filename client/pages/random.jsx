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
    let leftArrow = 'fa-xl fa-solid fa-arrow-left';
    let rightArrow = 'fa-xl fa-solid fa-arrow-right';
    let iconLeftBorder = 'icon-arrow-border';
    let iconRightBorder = 'icon-arrow-border';
    if (current === 0) {
      leftArrow = 'hidden';
      iconLeftBorder = 'hidden';
    } else {
      leftArrow = 'fa-xl fa-solid fa-arrow-left';
      iconLeftBorder = 'icon-border';
    }
    if (current === 99) {
      rightArrow = 'hidden';
      iconRightBorder = 'hidden';
    } else {
      rightArrow = 'fa-xl fa-solid fa-arrow-right';
      iconRightBorder = 'icon-border';
    }
    const distance = animal[current].distance.toFixed(2);
    return (
    <div className="w-100">
      <div className="col-lg-6 mt-3 col-md-10 col-sm-12 mx-auto">
        <div className="mx-auto text-center">
          <div className="w-90 box-shadows mx-auto pb-2">
            <div className="pt-3 pb-3 w-90 random-image-container mx-auto">
              <a href={`#detail?petId=${animal[current].id}`}><img className="object-fit"src={photo}/></a>
            </div>
          <div>
            <div className="w-90 mx-auto">
              <p className="pb-0 mb-0 text-black text-start">Hi! I&apos;m {animal[current].name}</p>
              <p className="pt-0 mt-0 pb-0 mb-0 text-gray text-end">{animal[current].contact.address.city}, {animal[current].contact.address.state}</p>
              <p className="pt-0 mt-0 text-gray text-end">{distance}miles</p>
            </div>
          </div>
          </div>
          <div className="d-flex justify-content-around mt-5">
            <div className={iconLeftBorder}>
              <i onClick={e => setCurrent(current - 1)} className={leftArrow}></i>
            </div>
            <div className="icon-border">
              <i onClick={e => location.reload()} className="fa-xl fa-solid fa-arrows-rotate"></i>
            </div>
            <div className="icon-border">
                <i onClick={() => handleLocalStorage(animal[current])} className="fa-xl fa-solid fa-heart"></i>
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
