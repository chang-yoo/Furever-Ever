// eslint-disable-next-line
import React from 'react'

export const handleLocalStorage = pet => {
  const datas = {
    pets: []
  };
  const data = JSON.parse(localStorage.getItem('favorite'));
  if (data === null) {
    datas.pets.push(pet);
    const JSONPets = JSON.stringify(datas);
    return localStorage.setItem('favorite', JSONPets);
  }
  datas.pets = data.pets;
  datas.pets.push(pet);
  const JSONNewPets = JSON.stringify(datas);
  return localStorage.setItem('favorite', JSONNewPets);
};
