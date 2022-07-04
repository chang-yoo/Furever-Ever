import React, { useState, useEffect } from 'react';
import parseRoute from './lib/parseRoute';
import GetAllAnimal from './pages/all-animals';
import Home from './pages/home';
import GetDetails from './pages/detail';
// eslint-disable-next-line
const { getAccessToken } = require('./component/petfinder');

export default function App() {
  const [route, setRoute] = useState(parseRoute(window.location.hash));
  const { path } = route;
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });
  }, [window.location.hash]);
  const renderPage = () => {
    if (path === '') {
      return <Home/>;
    }
    if (path === 'detail') {
      return <GetDetails petId={route.params.get('petId')} />;
    }
    if (path === 'recent') {
      return <GetAllAnimal/>;
    }
  };
  return renderPage();
}
