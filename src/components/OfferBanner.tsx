import React from 'react';



const OfferBanner: React.FC = () => {
  return (
    <div className="offer-banner" style={{backgroundColor:'#F86338', width:1232,height:496}}>
        <div style={{textAlign: "center", paddingTop: 150 }}>
      <p style={{color:"white"}}>March Discount</p> <p style={{fontSize:70,color:"white"}}>Up to 70% off</p>
     
      <button style={{color:"black",backgroundColor:"white",borderRadius:10}}>Get it {'>'}</button>
    </div>
    </div>
  );
};

export default OfferBanner;