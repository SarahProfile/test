import{Button, Container, Nav, Navbar as NavbarBs} from"react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from "../data/logo.png"

export function Navbar()
{
    return(
      <>
        <NavbarBs bg="wight">
        <Container>
        <Button style={{width:"3rem", height:"3rem", backgroundColor:"white", border:0,borderColor:"black"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg>
         <div style={{color:"black", width:"15rem",position:"absolute",top:20,}}>+022 319 821 967</div>
         </Button>
         <div>
            <img src={logo} />
         </div>
         <div>
         <Button style={{width:"3rem", height:"3rem", backgroundColor:"white", borderColor:"black",color:"black", borderRadius: 50,margin:1}}>
         Fb
         </Button>
         <Button style={{width:"3rem", height:"3rem", backgroundColor:"white",  borderColor:"black", color:"black", borderRadius: 50,margin:1}}>
         Tw
         </Button>
         <Button style={{width:"3rem", height:"3rem", backgroundColor:"white",  borderColor:"black", color:"black", borderRadius: 50,margin:1}}>
        Lg
         </Button>
         <Button style={{width:"3rem", height:"3rem", backgroundColor:"white", borderColor:"black", color:"black", borderRadius: 50,margin:1}}>
         Yt
         </Button>
         </div>
        </Container>
      </NavbarBs>
      <br />
        
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
       
        <Container>
            <Nav className="me-auto">
         <Nav.Link to="/" as={NavLink}>
           Home
         </Nav.Link>
         <Nav.Link to="/about" as={NavLink}>
          About 
         </Nav.Link>
         <Nav.Link to="/faq" as={NavLink}>
          FAQ 
         </Nav.Link>
         <Nav.Link to="/blog" as={NavLink}>
          Blog 
         </Nav.Link>
         </Nav>
         <Button style={{width:"3rem", height:"3rem", backgroundColor:"white", border:0}}>
         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
         </Button>
         <Button style={{width:"3rem", height:"3rem", backgroundColor:"white", border:0}}>
       
         <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="80" cy="204" r="20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="184" cy="204" r="20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
         {/*<div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{
            width:"1.5rem",
            height:"1.5rem",
            position:"absolute",
            bottom:10,
            right:10,
            transform: "translate(25%,25%)"

         }}>3</div>*/}
         </Button>
         <Button style={{width:"3rem", height:"3rem", backgroundColor:"white", border:0}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
         </Button>
        </Container>
    </NavbarBs>
    </>
    )
    
}