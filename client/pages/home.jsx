import React, { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  return (
    <div className="w-100 h-100">
      <div className="d-flex flex-column h-100 justify-content-center align-items-center">
          <div className="w-50 d-flex flex-column align-items-center mb-5">
            <div className="w-10 h-25 mx-auto">
              <img src="furever-paws.png"></img>
            </div>
            <div>
              <h2>Furever&Ever</h2>
            </div>
          </div>
        <div className="w-100 h-75 text-center mx-auto box-shadow border-filter">
          <form onSubmit={e => e.preventDefault()}>
            <div>
            <input
            id="location"
            name="location"
            types="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location"
            className="h5 mt-2"
            />
            </div>
            {/* <div>
              <select
                required
                id="types"
                name='types'
                types='number'
                value={types}
                onChange={e => setTypes(e.target.value)}
              >
                <option value="">Select</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div> */}
            <div>
              <a href={`#random?location=${location}`} types="submit" className="w-75 btn btn-primary h5 text-black">Submit</a>
              <a href="#recent" className="w-75 btn btn-primary h5 text-black">Recent 100 Pets</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
