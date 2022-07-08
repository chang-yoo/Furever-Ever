// eslint-disable-next-line
import React from "react"
const fetch = require('node-fetch');

export const GetAccessToken = () => {
  const tokenExist = localStorage.getItem('API_TOKEN');
  if (tokenExist === null || !tokenExist) {
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${process.env.Client_Id
        }&client_secret=${process.env.PETFINDER_API_KEY}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(data => {
        /* eslint-disable camelcase */
        const { access_token } = data;
        /* eslint-disable camelcase */
        const accessToken = access_token;
        return localStorage.setItem('API_TOKEN', accessToken);
      });
  } else {
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${process.env.Client_Id
        }&client_secret=${process.env.PETFINDER_API_KEY}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(data => {
        /* eslint-disable camelcase */
        const { access_token } = data;
        /* eslint-disable camelcase */
        const accessToken = access_token;
        return localStorage.setItem('API_TOKEN', accessToken);
      });
  }
};
