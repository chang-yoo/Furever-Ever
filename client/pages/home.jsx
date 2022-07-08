import React, { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    window.location.hash = `#random?location=${location}`;
  }
  let search = 'fa-lg fa-solid fa-magnifying-glass';
  if (location !== '') {
    search = 'hidden';
  } else {
    search = 'fa-lg fa-solid fa-magnifying-glass';
  }
  return (
    <div className="col-lg-6 col-md-10 col-sm-10 col-xs-10 h-100 mx-auto">
      <div className="d-flex flex-column h-100 justify-content-center align-items-center">
        <div className="mb-3 mt-5">
          <h4 className="text-main header-text">Let&apos;s find furever home!</h4>
        </div>
        <div className="home-image-container">
          <img className="object-fit" src="/furever-paws.png"></img>
        </div>
        <div className="w-90 h-30 mt-5 pt-3 pb-3 text-center mx-auto box-shadow">
          <form onSubmit={handleSubmit}>
            <div className="w-100 h-30 d-flex flex-column align-items-center justify-content-around search-icon-container">
              <input
              required
              id="location"
              name="location"
              types="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="CITY, STATE OR ZIP CODE"
                className="small w-90 main-icon-container height-1rem"
              />
              <i className={search}></i>
              <button type="submit" className="text-main w-90 btn btn-primary h5 border-filter height-1rem">RANDOM PICK</button>
              <a href={`#recent?location=${location}` } className="text-main w-90 btn btn-primary h5 border-filter height-1rem d-flex align-items-center justify-content-center">SHOW ALL</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
