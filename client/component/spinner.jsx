import React from 'react';

export const Loading = () => {
  return (
  <div className="d-flex h-50 text-center flex-column justify-content-center align-items-center">
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  );
};
