import BestSeller from "../components/BestSeller";
import Reviews from "../components/Reviews";
import { useEffect, useState } from "react"
import { fromatCurrency } from "../utilities/fromatCurrency";

export function ProductDetails()
{
    const [Product,setAllProductDetials]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setAllProductDetials(json)})
                

    },[])
    return 
        <div className="row" style={{paddingTop:20}}>
      
      {Product.map((item:any)=> <div className='col-12 col-lg-4' key={item.id}>
            <div style={{textAlign:"center"}}>
                <img src={item.image} style={{width:"200px",height:"200px",objectFit:"contain"}} />
                <p style={{fontSize:15}}>{item.category} </p>
                <h5>{item.title} </h5>
                <p className="description">{item.description} </p>
                <p>{fromatCurrency(item.price) }</p>
            </div>
            </div>
            </div> )}
            
          
        {/*
        <div className="row" >
  <div className="col-8" >
    <p style={{fontSize:14,fontWeight:700,color:"#333333", paddingTop:170}}>Home {">"}  Shop {">"} Dresses {">"} Blouse {">"} Classic Blouse IX</p>
    <p style={{fontSize:34,fontWeight:700,color:"#11142D"}}>Classic Blouse IX</p>
  </div>
  <div className="col-4" style={{backgroundColor:"#E2E2EA"}}></div>
</div>
<div className="row" style={{paddingTop:130}}>
  <div className="col"><div className="row">
  <div className="col"> 
  <div className="col" style={{height:126,width:88, backgroundColor:"#E2E2EA",margin:10}}></div>
   <div className="col"style={{height:126,width:88,backgroundColor:"#E2E2EA",margin:10}}></div>
   <div className="col"style={{height:126,width:88,backgroundColor:"#E2E2EA",margin:10}}></div>
   <div className="col"style={{height:126,width:88,backgroundColor:"#E2E2EA",margin:10}}></div>
   </div>
  <div className="col"style={{backgroundColor:"#E2E2EA"}}></div>
 
</div></div>
  <div className="col">

  </div>
  
</div>
    */}

    <><Reviews /><h1 style={{ paddingTop: 70 }}>Related Items</h1><BestSeller /></>
    )   
    
}