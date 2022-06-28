import React from 'react';
import { AuthUse } from '../../providers/auth';

const Card = () => {
  const {nasaInfo} = AuthUse();
  
  return (
    <div>Card</div>
  )
}

export default Card;