import React from 'react';

export default function Header() {
  return (
      <div className="w-100 mx-auto">
      <div className="col-lg-6 mt-3 col-md-10 col-sm-12 mx-auto">
        <div className="w-90 mx-auto">
        <div className="d-flex align-items-center pt-3">
          <div>
              <i onClick={() => { window.location.hash = '#'; }} className="fa-2x fa-solid fa-house"></i>
          </div>
          <div className=" mx-auto text-center">
            <a href="# ">
              <img className="logo-container" src="furever-paws.png"></img>
            </a>
          </div>
          <div className="favorite-icon-container">
            <i onClick={() => { window.location.hash = 'favorite'; }} className="fa-2x fa-solid fa-heart link-to-favorite"></i>
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}
