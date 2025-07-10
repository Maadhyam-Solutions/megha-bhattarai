import React, { useState } from 'react';
import './buybutton.css'

export default function BuyButton() {
  return (
    <div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSerh9UFtYsiE5ixmDh51ZJ0lNq1ceXednb6AXEXO11ZkGvqNQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="buyMyBookBtn"
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        Buy Now
      </a>
    </div>
  );
}
