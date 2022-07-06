import React from 'react';

export default function Header() {
  return (
      <div className="w-100 d-flex flex-column align-items-center pt-3">
        <div className="mx-auto text-center">
          <a href="#">
            <img className="w-25 h-25" src="furever-paws.png"></img>
          </a>
        </div>
        <div>
          <a href="#"><h2 className="text-black">Furever&Ever</h2></a>
        </div>
      </div>
  );
}
