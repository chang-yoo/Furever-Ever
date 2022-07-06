import React, { useState } from 'react';
const fetch = require('node-fetch');

export default function GetRandom(props) {
  const accessToken = localStorage.getItem('API_TOKEN');
  // eslint-disable-next-line
  const [animal, setAnimal] = useState(()=>{
    fetch(`https://api.petfinder.com/v2/animals?location/${props.location}&limit=100`, {
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
    if (current === 0) {
      leftArrow = 'hidden';
    } else {
      leftArrow = 'fa-2x fa-solid fa-arrow-left';
    }
    if (current === 99) {
      rightArrow = 'hidden';
    } else {
      rightArrow = 'fa-2x fa-solid fa-arrow-right';
    }

    return (
    <div className="w-100">
      <div className="col-lg-6 col-md-10 col-sm-12 mx-auto">
        <div className="w-50 h-50 mx-auto">
          <img src={photo}/>
          <div className="mt-5">
            <div className="d-flex justify-content-between">
              <i onClick={e => setCurrent(current - 1)} className={leftArrow}></i>
              <a href={`#detail?petId=${animal[current].id}`}>Details</a>
              <i onClick={e => setCurrent(current + 1)} className={rightArrow}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
