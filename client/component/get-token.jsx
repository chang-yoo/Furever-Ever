const fetch = require('node-fetch');

function getAccessToken() {
  const tokenExist = localStorage.getItem('API_TOKEN');
  if (tokenExist === null) {
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${process.env.PETFINDER_API_KEY
        } & client_secret=${process.env.Client_Id}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(data => {
        // eslint-disable-next-line
        const { access_token } = data;
        // eslint-disable-next-line
        const accessToken = access_token
        localStorage.setItem('API_TOKEN', accessToken);
        return accessToken;
      });
  } else {
    localStorage.removeItem('API_TOKEN');
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${process.env.PETFINDER_API_KEY
        } & client_secret=${process.env.Client_Id}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(data => {
        // eslint-disable-next-line
        const { access_token } = data;
        // eslint-disable-next-line
        const accessToken = access_token
        localStorage.setItem('API_TOKEN', accessToken);
        return accessToken;
      });
  }
}
module.exports = { getAccessToken };
