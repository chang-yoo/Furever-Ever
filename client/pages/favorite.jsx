import React, { useState, useEffect } from 'react';

export default function FavoritePage() {
  const [favorited, setFavorited] = useState(null);
  const [edit, setEdit] = useState(0);
  useEffect(() => {
    if (!favorited) {
      const favoritedPets = JSON.parse(localStorage.getItem('favorite'));
      setFavorited(favoritedPets);
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
    return <h5>Your favorite list is currently empty</h5>;
  }
  if (favorited !== null) {
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
            <div className="w-100 d-flex flex-wrap justify-content-center mt-2 mb-2">
              <div className="col-sm-6 col-lg-3 col-md-4 d-flex align-items-center h-auto justify-content-center image-container-allanimal m-2">
                <a href={`#detail?petId=${eachPet.id}`}>
                  <img src={photo}></img>
                </a>
              </div>
              <i id={eachPet.id}onClick={handleFavorite} className="fa-xl fa-solid fa-x pt-4"></i>
            </div>
          </div>
        );
      }
      )}
    </div>
    );
  }
}
