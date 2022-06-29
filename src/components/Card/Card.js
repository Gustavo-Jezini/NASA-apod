import React, { useEffect } from 'react';
import { AuthUse } from '../../providers/auth';
import './Card.css';

const Card = () => {
  const {nasaInfo} = AuthUse();
  useEffect(() => console.log(nasaInfo), [nasaInfo])
  return (
    <main className='main-card'>
      {nasaInfo.length > 0 ? nasaInfo.map((info, i) => (
      <div key={i} class="card div-card">
        <img style={{height: '200px'}} src={info.url} class="card-img-top" alt="Sky" />
        <div class="card-body">
          <h5 class="card-title">{info.title}</h5>
          <p class="card-text text-card">{info.explanation}</p>
        </div>
      </div>
      )) : null}
    </main>
  )
}

export default Card;