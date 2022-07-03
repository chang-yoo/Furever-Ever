import React, { useEffect } from 'react';
import { getAccessToken } from './component/get-token';
import Home from './pages/home';

export default function App() {
  useEffect(() => {
    getAccessToken();
  });
  return (
    <div><Home/></div>
  );
}
