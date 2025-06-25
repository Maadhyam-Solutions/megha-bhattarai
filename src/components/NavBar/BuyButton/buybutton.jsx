import React, { useState } from 'react';
import './buybutton.css'

export default function BuyButton() {
  const handleClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSerh9UFtYsiE5ixmDh51ZJ0lNq1ceXednb6AXEXO11ZkGvqNQ/viewform', '_blank');
  };
  return (
    <div>
      <button onClick={handleClick} className='buyMyBookBtn'>Buy Now</button>
    </div>
  );
}
