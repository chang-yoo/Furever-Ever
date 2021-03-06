import React from 'react';

export const TryAgain = () => {
  return (
    <div className="d-flex h-50 text-center flex-column justify-content-center align-items-center">
        <h3 className="text-main">Sorry,<br/> we couldn&apos;t find any pets based on your location. <br /></h3>
        <h3 className="mt-1 text-main">Please put a <span>COMMA</span> between city and state!</h3>
        <a href="#" className="text-black">Return Home</a>
    </div>
  );
};
