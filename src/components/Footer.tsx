import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import logo from "../data/logo.png"
export default function Footer() {
  return (
    
    <MDBFooter className='text-center text-lg-start text-muted' style={{backgroundColor:"#F86338",marginTop:100}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
        <div className='me-5 d-none d-lg-block' style={{paddingTop:40}}>
            <div><img src={logo} /></div>
            
          <div style={{color:"white",paddingTop:30}}>OurStudio is a digital agency UI / UX Design and Website </div><div style={{color:"white"}}>Development located in Ohio, United States of America</div>
        </div>

       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
           
            </MDBCol>

           

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4' style={{color:"white"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Our Social Media</h6>
              <p style={{color:"white", fontSize:14}}>
                <a href='#!' className='text-reset'>
                Facebook
             </a>
              </p>
              <p style={{color:"white", fontSize:14}}>
                <a href='#!' className='text-reset'>
                Twitter
                </a>
              </p>
              <p style={{color:"white", fontSize:14}}>
                <a href='#!' className='text-reset'>
                Instagram
                </a>
              </p>
              <p style={{color:"white", fontSize:14}}>
                <a href='#!' className='text-reset'>
                Youtube
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' style={{color:"white"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p style={{color:"white", fontSize:14}}>
              <MDBIcon icon='map-marker-alt' className='me-2' />
              8819 Ohio St. South Gate,
California 90280
              </p>
              <p style={{color:"white", fontSize:14}}>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p style={{color:"white", fontSize:14}}>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p style={{color:"white", fontSize:14}}>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div style={{color:"white",paddingLeft:30,paddingBottom:30}}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='#'>
        Copyright Tanah Air Studio
        </a>
      </div>
    </MDBFooter>
   
  );
}