import React from 'react';

export default function NotFound() {
  return (
      <div className="d-flex h-50 text-center flex-column justify-content-center align-items-center">
        <h3 className="text-main">Sorry, that page doesn&apos;t exist. <br />Please try it again.</h3>
        <a href="#" className="mt-5 text-black">Return Home</a>
      </div>
  );
}
