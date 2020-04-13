import React, { useEffect, useState } from 'react';
import { StockTile } from './StockTile';

export const LandingPage = (props) => {
  let authToken = new URLSearchParams(props.location.search).get('jwt');
  const [symbol, setSymbol] = useState('');
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      console.log(event);
      setSymbol(event.target.value);
    }
  }
  return (
    <div>
      Landing Page
      <input type="text" onKeyUp={handleKeyUp}></input>
      <StockTile symbol={symbol}></StockTile>
    </div>
  )
}