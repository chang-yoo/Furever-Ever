import React, { useState, useEffect } from 'react';

export default function FavoritePage() {
  const [favorited, setFavorited] = useState(null);
  useEffect(() => {
    if (!favorited) {
      const favoritedPets = JSON.parse(localStorage.getItem('favorite'));
      setFavorited(favoritedPets);
    }
  }, [favorited]);
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
              { /* eslint-disable-next-line */}
              <i onClick={(event) => console.log(event.target.id)} className="fa-xl fa-solid fa-x pt-4"></i>
            </div>
          </div>
        );
      }
      )}
    </div>
    );
  }
}
