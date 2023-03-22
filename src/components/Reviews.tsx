import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { Button } from "react-bootstrap";

export default function Reviews() {
  return (
    <>
    <h1 style={{textAlign: "center", paddingTop:150,paddingBottom:70}}>What Our Customer Says</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{width:816,height:312, backgroundColor:"#FFEFEB"}}>
        <SwiperSlide>
        <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
         </Button>
         <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div>
            </SwiperSlide>
        <SwiperSlide > 
        <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
        </Button>
        <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div></SwiperSlide>
        <SwiperSlide >
        <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
        </Button>
         <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div></SwiperSlide>
        <SwiperSlide >  <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
        </Button>
        <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div></SwiperSlide>
        <SwiperSlide > <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
        </Button>
         <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div></SwiperSlide>
        <SwiperSlide >  <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
        </Button>
        <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div></SwiperSlide>
        <SwiperSlide >  <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
        </Button>
        <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div></SwiperSlide>
        <SwiperSlide > <Button style={{width:"5rem", height:"5rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,}}>
        
        </Button>
         <div style={{backgroundColor:"#FFEFEB",padding:40}}>
         <p style={{fontSize:15, paddingTop:20}}>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
         <h3>Shalima Hayden</h3>
         <p style={{fontSize:10}}>Product Designer</p>
         </div></SwiperSlide>
      </Swiper>
    </>
  );
}
