import React from 'react';
import "./styles.css";
import { useEffect, useState } from "react"
import { fromatCurrency } from "../utilities/fromatCurrency";

const BestSeller: React.FC = () => {
    const [Bestproducts,setBestProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setBestProducts(json)})
                

    },[])
  return (
    <div className="row">
    
      {Bestproducts.map((item:any)=> <div className='col-12 col-lg-4' key={item.id}>
            <div style={{textAlign:"center"}}>
                <img src={item.image} style={{width:"200px",height:"200px",objectFit:"contain"}} />
                <p style={{fontSize:15}}>{item.category} </p>
                <h5>{item.title} </h5>
                <p className="description">{item.description} </p>
                <p>{fromatCurrency(item.price) }</p>
            </div>
            </div>
           
  )
 
}
</div>)
}

export default BestSeller;