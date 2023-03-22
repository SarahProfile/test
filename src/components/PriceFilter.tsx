import React, { useState } from "react";

export default function PriceFilter() {

  const [ price, setPrice ] = useState(40);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e)=>{
    setPrice( e.target.value );
  }
  const hotels = [
    { name: "A", price: 40  },
    { name: "B", price: 50  },
    { name: "C", price: 60  }
  ];

  return (
    <div className="App">
      <input type="range" style={{color:"red"}} onInput={ handleInput } />
      <p style={{fontSize:12}}>Price: { price }</p>
      
    </div>
  );
}
