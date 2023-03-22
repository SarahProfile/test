import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";



import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper";
import { fromatCurrency } from "../utilities/fromatCurrency";
import HomeBanner from "../components/HomeBanner";
import SwiperHome from "../components/SwiperHome";
import { Container } from "react-bootstrap";
import OfferBanner from "../components/OfferBanner";
import BestSeller from "../components/BestSeller";
import Reviews from "../components/Reviews";

export function Home()
{
    const [products,setProducts]=useState([])
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProducts(json)})
                fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(json=>{
                    console.log(json)
                    setCategories(json)})

    },[])
    return <>
    <div className="row" >

  <div className="col-6 col-md-4"> <HomeBanner/></div>
  <div className="col-12 col-md-8"> <SwiperHome/></div>
 </div>
 <div className="row" style={{paddingTop:100, paddingBottom:100}}>
  {categories.map((item:any) => <div className='col-12 col-lg-4' key={item.id} style={{backgroundColor:"#E2E2EA", margin:10, width:300,height:460,}}> <h3 style={{marginTop:232,marginLeft:44}}>{item}</h3><p style={{fontSize:13,marginLeft:46}}>Description of the catogires</p> </div>)  }
  
 </div>
 
        <h3 style={{paddingTop:10, paddingBottom:30,float: "left"}}>New arrival</h3> <p style={{color:"#F86338", fontSize:20, float: "right",}}>See All</p>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper"
      >
        {products.map((item:any)=> <SwiperSlide key={item.id}>
            <div style={{textAlign:"center"}}>
                <img src={item.image} style={{width:"200px",height:"200px",objectFit:"contain"}} />
                <p style={{fontSize:15}}>{item.category} </p>
                <h5>{item.title} </h5>
                <p className="description">{item.description} </p>
                <p>{fromatCurrency(item.price) }</p>
            </div>
        </SwiperSlide>
       
       
     )}
      </Swiper>
    <OfferBanner/>
    <h1 style={{paddingTop:150, paddingBottom:50}}>Best Seller</h1>
    <BestSeller />
    <Reviews/>
   
     
    </>
}