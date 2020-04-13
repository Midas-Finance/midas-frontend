import React, { useEffect, useState } from "react";

export const StockTile = props => {

  const [price, setPrice] = useState('');

  useEffect(() => {
    console.log(props)
    const interval = setInterval(() => {
      if (props.symbol) {
        // To do: create url consts
        fetch(`http://localhost:3000/pricing/${props.symbol}`)
          .then(response => {
            return response.json() || {};
          })
          .then(data => {
            setPrice(data);
          });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [props]);

  return (
    <div>
      <p> {props.symbol} </p>
      <p> {price} </p>
    </div>
  );
};
