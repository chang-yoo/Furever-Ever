const fetch = require('node-fetch');
require('dotenv/config');
const path = require('path');
const pg = require('pg');
const express = require('express');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');
// eslint-disable-next-line no-unused-vars
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

fetch('https://api.petfinder.com/v2/oauth2/token', {
  method: 'POST',
  body: `grant_type=client_credentials&client_id=${process.env.PETFINDER_API_KEY}&client_secret=${process.env.Client_Id}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(res => res.json())
  // eslint-disable-next-line no-console
  .then(data => console.log(data));

// app.get('https://api.petfinder.com/v2/animals?limit=100', (req, res, next) => {

// });

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
