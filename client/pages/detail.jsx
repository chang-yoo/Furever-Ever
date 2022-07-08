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

    let photo = '/furever-placeholder.png';
    if (photos.length > 0) {
      const firstImage = photos[0];
      const { medium } = firstImage;
      photo = medium;
    }

    return (
    <div className="w-100 mx-auto mt-3 d-flex flex-lg-row flex-column justify-content-center">
      <div className="col-lg-5 col-md-8 col-sm-12 mx-3">
        <div className="w-100 mx-auto h-50 d-flex justify-content-center">
          <img className="object-fit"src={photo}></img>
        </div>
        <div>
          <h5 className="text-main">Contact</h5>
          <a href={'tel:' + phone}>Phone: {phone}</a>
          <br/>
          <a href={'mailto:' + email}>Email: {email}</a>
        </div>
        <hr/>
        <div>
          <h5 className="text-main">Status on {status_changed_at.split('T')[0]}</h5>
          <h4>{status}</h4>
        </div>
        <hr />
      </div>
      <div className="col-lg-5 col-md-12 mx-3">
        <div>
          <h5 className="text-main">Name</h5>
          <h4>{name}</h4>
        </div>
        <hr />
        <div>
          <h5 className="text-main">Description</h5>
          <h4>{descriptions}</h4>
        </div>
        <hr />
        <div>
          <h5 className="text-main">Breeds</h5>
          <h4>Primary: {primary}<br />Secondary: {'' + secondary}<br />Mixed: {'' + mixed}</h4>
        </div>
        <hr/>
        <div>
          <h5 className="text-main">Age</h5>
          <h4>{age}</h4>
        </div>
        <hr/>
        <div>
          <h5 className="text-main">Attributes</h5>
          <h4>Spayed/Neutered: {'' + spayed_neutered} <br/>Speical Need: {'' + special_needs} <br/>Shots Current: {'' + shots_current}</h4>
        </div>
        <hr/>
        <div>
          <h5 className="text-main">Type</h5>
          <h4>{type}</h4>
        <hr/>
        </div>
        <div>
          <h5 className="text-main">Size</h5>
          <h4>{size}</h4>
          <hr />
        </div>
        <div>
          <h5 className="text-main">Coat</h5>
          <h4>{coat}</h4>
        </div>
        <hr />
        <div>
          <h5 className="text-main">Tags</h5>
          <h4>{allTags}</h4>
        </div>
        <hr />
      </div>
    </div>
    );
  }
}
