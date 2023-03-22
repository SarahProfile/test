import React from 'react';
import { useEffect, useState } from "react"
export function SearchComponent(){


    const [AllProducts,setAllProducts]=useState([])
    const [searchInput, setSearchInput] = useState("");
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setAllProducts(json)})
                

    },[])
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
        AllProducts.filter((item:any) => { 
        return item.title.match(searchInput);
    });
    }
         
      
      
    return(
        <>
         

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />


 

{AllProducts.map((item:any) => { 

<div key={item.id}>
  <tr>
    <td>{item.title}</td>
    <td>{item.description}</td>
  </tr>
</div>

})}





        </>
    )
}