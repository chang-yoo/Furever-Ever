import React, { useState, useEffect } from 'react';
import parseRoute from './lib/parseRoute';
import GetAllAnimal from './pages/all-animals';
import Home from './pages/home';
import GetDetails from './pages/detail';
import GetRandom from './pages/random';
import Header from './component/header';
import FavoritePage from './pages/favorite';
import NotFound from './component/not-found';
// eslint-disable-next-line
const { getAccessToken } = require('./component/petfinder')

export default function App() {
  const [route, setRoute] = useState(parseRoute(window.location.hash));
  const { path } = route;
  const location = window.location.hash;
  useEffect(() => {
    getAccessToken();
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });
  }, [location]);
  const renderPage = () => {
    if (path === '') {
      return (
      <div>
        <Home/>
        </div>
      );
    }
    if (path === 'detail') {
      return (
        <div>
        <Header />
        <GetDetails petId={route.params.get('petId')} />
        </div>
      );
    }
    if (path === 'recent') {
      return (
        <div>
        <Header />
        <GetAllAnimal location={route.params.get('location')} />
        </div>
      );
    }
    if (path === 'random') {
      return (
        <div>
        <Header />
        <GetRandom location={route.params.get('location')}/>
        </div>
      );
    }
    if (path === 'favorite') {
      return (
        <div>
        <Header />
        <FavoritePage/>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <NotFound />
      </div>
    );
  };
  return (
    <div>
      {renderPage()}
    </div>
  );
}
