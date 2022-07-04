import React, { useState, useEffect } from 'react';
import parseRoute from './lib/parseRoute';
import GetAllAnimal from './pages/all-animals';
// eslint-disable-next-line
import Home from './pages/home';
import GetDetails from './pages/detail';
const { getAccessToken } = require('./component/petfinder');

export default function App() {
  // eslint-disable-next-line
  const [route, setRoute] = useState(parseRoute(window.location.hash))
  const { path } = route;
  useEffect(() => {
    if (path !== route.path) {
      getAccessToken();
      setRoute(parseRoute(window.location.hash));
    }
  }, [route]);
  if (path === '') {
    return <Home/>;
  }
  if (path === 'detail') {
    // eslint-disable-next-line
    return <GetDetails petId={route.params.get('petId')} />
  }
  if (path === 'recent') {
    return (
      <div>
        <GetAllAnimal />
      </div>
    );
  }
}
