import React from 'react';
import { Container } from 'react-bootstrap';
import "./styles.css";


const ShopBanner: React.FC = () => {
  return (
    <>
   
    <div className="row" >
    <div className="col-6 col-md-4" style={{textAlign:"center",paddingTop:140}}>
      <p style={{fontSize:18}}>Home {'>'} Shop</p> <p style={{fontSize:48}}>Shop</p>
      
    </div>
    <div className="col-12 col-md-8" style={{backgroundColor:"#E2E2EA",height:400}}>
    
  </div>
  </div>
 
  </>
  );
};

export default ShopBanner;