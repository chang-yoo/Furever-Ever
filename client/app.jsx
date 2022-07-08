import React, { useState, useEffect } from 'react';
import parseRoute from './lib/parseRoute';
import GetAllAnimal from './pages/all-animals';
import Home from './pages/home';
import GetDetails from './pages/detail';
import GetRandom from './pages/random';
import Header from './component/header';
import FavoritePage from './pages/favorite';
import NotFound from './component/not-found';
import Offline from './component/offline';
const { GetAccessToken } = require('./component/petfinder');

export default function App() {
  useEffect(() => {
    GetAccessToken();
  }, []);
  const [status, setStatus] = useState('on');
  const [route, setRoute] = useState(parseRoute(window.location.hash));
  const { path } = route;
  const location = window.location.hash;
  useEffect(() => {
    window.addEventListener('offline', event => setStatus('off'));
  }, [window.location.hash]);
  useEffect(() => {
    GetAccessToken();
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });
  }, [location]);
  const renderPage = () => {
    if (status === 'on' && path === '') {
      return (
      <div>
        <Home/>
        </div>
      );
    }
    if (status === 'on' && path === 'detail') {
      return (
        <div>
        <Header />
        <GetDetails petId={route.params.get('petId')} />
        </div>
      );
    }
    if (status === 'on' && path === 'recent') {
      return (
        <div>
        <Header />
        <GetAllAnimal location={route.params.get('location')} />
        </div>
      );
    }
    if (status === 'on' && path === 'random') {
      return (
        <div>
        <Header />
        <GetRandom location={route.params.get('location')}/>
        </div>
      );
    }
    if (status === 'on' && path === 'favorite') {
      return (
        <div>
        <Header />
        <FavoritePage/>
        </div>
      );
    }
    if (status === 'off') {
      return (
        <div>
          <Header/>
          <Offline/>
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
