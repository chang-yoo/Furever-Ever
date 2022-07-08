import React, { useState, useEffect } from 'react';
const { Loading } = require('../component/spinner');

export default function FavoritePage() {
  const [load, setLoad] = useState(true);
  const [favorited, setFavorited] = useState(null);
  const [edit, setEdit] = useState(0);
  useEffect(() => {
    if (!favorited) {
      const favoritedPets = JSON.parse(localStorage.getItem('favorite'));
      setFavorited(favoritedPets);
      setLoad(false);
    }
  }, [favorited]);
  function handleFavorite(event) {
    const favored = favorited.pets;
    const newFavored = favored.filter(eachPet => String(eachPet.id) !== event.target.id);
    favorited.pets = newFavored;
    setEdit(edit + 1);
    localStorage.setItem('favorite', JSON.stringify(favorited));
  }
  if (favorited !== null && favorited.pets.length === 0) {
    return (
      <div className="text-center mt-5">
        <h5>Your favorite list is currently empty</h5>
      </div>
    );
  }
  if (favorited !== null && load === false) {
    const pets = favorited.pets;
    return (
    <div>
      {pets.map(eachPet => {
        let photo = '/furever-paws.png';
        if (eachPet.photos.length > 0) {
          const firstImage = eachPet.photos[0];
          const { medium } = firstImage;
          photo = medium;
        }
        return (
          <div key={pets.indexOf(eachPet)} className="w-100">
            <div className="w-100 d-flex flex-column align-items-center mt-2 mb-2">
              <div className="mb-0 bp-0 container-shadow random-image-container col-sm-6 col-lg-3 col-md-4 h-auto image-container-allanimal m-2">
                <a href={`#detail?petId=${eachPet.id}`}>
                  <img className="p-2 border-radius-10 object-fit" src={photo}></img>
                </a>
                <div className="w-90 mx-auto">
                  <h4 className="pb-0 mb-0 text-main text-start">Hi! I&apos;m {`${eachPet.name}`}</h4>
                  <p className="pt-0 mt-0 pb-0 mb-0 text-gray text-end">{`${eachPet.contact.address.city}`}, {`${eachPet.contact.address.state}`}</p>
                  <p className="pt-0 mb-0 mt-0 text-gray text-end">{`${eachPet.distance.toFixed(2)}`}miles</p>
                </div>
              </div>
              <div className="w-90 col-sm-6 col-lg-3 col-md-4">
                <button className="w-100 bg-main border-filter text-white" id={eachPet.id} onClick={handleFavorite} >X</button>
              </div>
            </div>
          </div>
        );
      }
      )}
    </div>
    );
  }
  return Loading();
}
