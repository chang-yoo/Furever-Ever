import React, { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    window.location.hash = `#random?location=${location}`;
  }
  return (
    <div className="w-100 h-100 bg-main">
      <div className="d-flex flex-column h-100 justify-content-center align-items-center">
        <div className="w-100 h-75 text-center mx-auto box-shadow border-filter">
          <form onSubmit={handleSubmit}>
            <div>
              <input
              required
              id="location"
              name="location"
              types="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Location"
              className="h5 mt-2"
              />
            </div>
            <div>
              <button type="submit" className="w-75 btn btn-primary h5 text-black">Random</button>
              <a href="#recent" className="w-75 btn btn-primary mt-5 h5 text-black">List</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
