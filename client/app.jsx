import React, { useState, useEffect } from 'react';
import parseRoute from './lib/parseRoute';
import GetAllAnimal from './pages/all-animals';
// eslint-disable-next-line
import Home from './pages/home';
const { getAccessToken } = require('./component/petfinder');

export default function App() {
  // eslint-disable-next-line
  const [route, setRoute] = useState(parseRoute(window.location.hash))
  useEffect(() => {
    getAccessToken();
  }, [route]);

  if (route === 'detail') {
    // eslint-disable-next-line
    return <Detail postId={route.params.get('petId')} />
  }
  return (
    <div>
    <GetAllAnimal />
    </div>
  );
}
