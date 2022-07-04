import React from 'react';

export default function Home() {
  return (
    <div className="w-100 h-100 bg-main">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <div className="w-50 col-6 h-70 text-center mx-auto">
          <div className="w-100">
            <div>
              <h2>Furever&Ever</h2>
            </div>
            <div className="w-30 h-50 mx-auto">
              <img href=""></img>
            </div>
          </div>
          <div className="w-100">
            <h5>UserName</h5>
          </div>
          <div>
              <h5>CREATE NEW USERNAME</h5>
            <div>
              <h5>LOG IN</h5>
            </div>
            <div>
              <h5>CONTINUE AS GUEST</h5>
              <a href="#recent" className="btn btn-success">Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
