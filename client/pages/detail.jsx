/* eslint-disable camelcase */
import React, { useState } from 'react';
const fetch = require('node-fetch');

export default function GetDetails(props) {
  const accessToken = localStorage.getItem('API_TOKEN');
  const [detail, setDetail] = useState(() => {
    fetch(`https://api.petfinder.com/v2/animals/${props.petId}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => {
        setDetail(data.animal);
      });
  });
  if (detail !== undefined) {
    const { age, attributes, type, breeds, coat, contact, description, name, size, status, status_changed_at, tags, photos } = detail;
    const { email, phone } = contact;
    const { primary, secondary, mixed } = breeds;
    const { spayed_neutered, special_needs, shots_current } = attributes;
    const fix = text => {
      return text.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
    };
    let descriptions = description;
    if (description) {
      descriptions = fix(description);
    }
    const getTags = tag => {
      let getMeTags = '';
      for (let i = 0; i < tag.length - 1; i++) {
        if (i === 0) {
          getMeTags += '' + tag[i];
        } else {
          getMeTags += ' / ' + tag[i];
        }
      }
      return getMeTags;
    };
    const allTags = getTags(tags);

    let photo = '/furever-paws.png';
    if (photos.length > 0) {
      const firstImage = photos[0];
      const { medium } = firstImage;
      photo = medium;
    }

    return (
    <div className="w-100 mx-auto mt-3 d-flex flex-lg-row flex-column justify-content-center">
      <div className="col-lg-5 col-md-12 mx-3">
        <div className="w-100 mx-auto h-70">
          <img className="h-75 object-fit"src={photo}></img>
        </div>
        <div>
          <small>Contact</small>
          <br/>
          <a href={'tel:' + phone}>Phone: {phone}</a>
          <br/>
          <a href={'mailto:' + email}>Email: {email}</a>
        </div>
        <hr/>
        <div>
          <small>Status on {status_changed_at.split('T')[0]}</small>
          <p>{status}</p>
        </div>
        <hr />
      </div>
      <div className="col-lg-5 col-md-12 mx-3">
        <div>
          <small>Name</small>
          <p>{name}</p>
        </div>
        <hr />
        <div>
          <small>Description</small>
          <p>{descriptions}</p>
        </div>
        <hr />
        <div>
          <small>Breeds</small>
          <p>Primary: {primary}<br />Secondary: {'' + secondary}<br />Mixed: {'' + mixed}</p>
        </div>
        <hr/>
        <div>
          <small>Age</small>
          <p>{age}</p>
        </div>
        <hr/>
        <div>
          <small>Attributes</small>
          <p>Spayed/Neutered: {'' + spayed_neutered} <br/>Speical Need: {'' + special_needs} <br/>Shots Current: {'' + shots_current}</p>
        </div>
        <hr/>
        <div>
          <small>Type</small>
          <p>{type}</p>
        <hr/>
        </div>
        <div>
          <small>Size</small>
          <p>{size}</p>
          <hr />
        </div>
        <div>
          <small>Coat</small>
          <p>{coat}</p>
        </div>
        <hr />
        <div>
          <small>Tags</small>
          <p>{allTags}</p>
        </div>
        <hr />
      </div>
    </div>
    );
  }
}
