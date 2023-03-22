import React from 'react';
import "./styles.css";
import { useEffect, useState } from "react"
import { fromatCurrency } from "../utilities/fromatCurrency";

const AllProducts: React.FC = () => {
    const [AllProducts,setAllProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setAllProducts(json)})
                

    },[])
  return (
    <div className="row" style={{paddingTop:20}}>
      
      {AllProducts.map((item:any)=> <div className='col-12 col-lg-4' key={item.id}>
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

export default AllProducts;