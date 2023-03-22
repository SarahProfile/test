import{Button} from"react-bootstrap"
import AllProducts from "./AllProducts"
import PriceFilter from "./PriceFilter"
import { SearchComponent } from "./SearchComponent"
export function ShopFilterComponent()
{
return(
    <>
    <div className="row" style={{paddingTop:140}}>
  
  <div className="col-3"><div className ="row">
  <div className="col"><p style={{fontSize:20}}>Price</p></div>
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"white", border:0,borderColor:"black"}}>
        <svg fill="#F86338" height="44px" width="44px"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M245.368,42.667h-29.867c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8h29.867c4.419,0,8-3.582,8-8 C253.368,46.249,249.787,42.667,245.368,42.667z"></path> </g> </g> <g> <g> <path d="M245.368,102.4h-29.867c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8h29.867c4.419,0,8-3.582,8-8 C253.368,105.982,249.787,102.4,245.368,102.4z"></path> </g> </g> <g> <g> <path d="M245.368,132.267h-29.867c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8h29.867c4.419,0,8-3.582,8-8 C253.368,135.849,249.786,132.267,245.368,132.267z"></path> </g> </g> <g> <g> <path d="M489.642,59.939c-8.73-33.086-38.866-57.511-72.789-59.754c-0.097-0.011-0.194-0.019-0.291-0.027 C416.047,0.055,27.768,0,27.768,0c-4.418,0-8,3.582-8,8s3.582,8,8,8h17.586l145.081,174.096v148.571 c0,2.909,1.578,5.587,4.122,6.997c1.208,0.67,2.544,1.003,3.878,1.003c1.473,0,2.945-0.406,4.24-1.216l68.267-42.667 c2.339-1.462,3.76-4.026,3.76-6.784V190.096l63.685-76.422c5.524,12.102,14.15,22.961,24.832,31.09 c1.448,1.102,3.15,1.634,4.838,1.634c2.414,0,4.798-1.088,6.372-3.155c2.676-3.516,1.995-8.535-1.521-11.211 c-10.234-7.788-18.126-18.665-22.225-30.625c-0.194-0.567-0.451-1.095-0.752-1.586l69.453-83.343 c25.719,3.182,48.099,22.193,54.787,47.542c7.379,27.972-5.569,58.582-30.786,72.785c-14.37,8.094-31.806,10.355-47.84,6.207 c-4.277-1.106-8.642,1.463-9.749,5.74c-1.107,4.277,1.462,8.642,5.741,9.749c6.564,1.699,13.317,2.535,20.066,2.535 c13.805,0,27.582-3.504,39.634-10.291c15.31-8.622,27.578-22.441,34.547-38.908C492.755,95.363,494.126,76.932,489.642,59.939z M258.702,291.566l-52.267,32.667V195.2h52.267V291.566z M262.954,179.2h-60.773l-75.555-90.667h211.884L262.954,179.2z M351.843,72.533h-238.55L66.181,16h332.773L351.843,72.533z"></path> </g> </g> <g> <g> <path d="M260.559,333.163c-1.485-2.226-3.982-3.563-6.657-3.563c-2.675,0-5.173,1.336-6.657,3.563 c-5.069,7.606-21.61,33.404-21.61,46.037c0,15.586,12.681,28.267,28.267,28.267s28.267-12.681,28.267-28.267 C282.168,366.568,265.627,340.769,260.559,333.163z M253.901,391.467c-6.764,0-12.267-5.503-12.267-12.267 c0-3.958,5.59-15.328,12.268-26.57c6.676,11.235,12.266,22.604,12.266,26.57C266.168,385.964,260.665,391.467,253.901,391.467z"></path> </g> </g> <g> <g> <path d="M218.959,388.629c-1.484-2.226-3.982-3.563-6.657-3.563s-5.173,1.336-6.657,3.563c-5.07,7.606-21.61,33.404-21.61,46.037 c0,15.586,12.681,28.267,28.267,28.267s28.267-12.681,28.267-28.267C240.568,422.034,224.028,396.236,218.959,388.629z M212.301,446.933c-6.764,0-12.267-5.503-12.267-12.267c0-3.958,5.591-15.328,12.268-26.57 c6.675,11.235,12.266,22.604,12.266,26.57C224.568,441.43,219.065,446.933,212.301,446.933z"></path> </g> </g> <g> <g> <path d="M261.625,437.696c-1.485-2.226-3.982-3.563-6.657-3.563c-2.675,0-5.173,1.337-6.657,3.563 c-5.069,7.606-21.61,33.404-21.61,46.037c0,15.586,12.681,28.267,28.267,28.267s28.267-12.68,28.267-28.267 C283.235,471.101,266.694,445.302,261.625,437.696z M254.968,496c-6.764,0-12.267-5.503-12.267-12.267 c0-3.958,5.59-15.328,12.268-26.57c6.676,11.235,12.266,22.604,12.266,26.57C267.235,490.497,261.732,496,254.968,496z"></path> </g> </g> </g></svg>
        
         </Button></div>
         
  
</div>
<PriceFilter/>
<p style={{fontSize:20,paddingTop:70}}>Color</p>
<div className="row" >
  <div className="col" > <Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
</div>
<div className="row">
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
  <div className="col"><Button style={{width:"3rem", height:"3rem", backgroundColor:"#E2E2EA", borderColor:"#E2E2EA",color:"black", borderRadius: 50,margin:5}}>
        
        </Button></div>
</div>
<p style={{fontSize:20,paddingTop:70}}>Categories</p>
<div className="row">
  <div className="col"><a href="#">Dresses</a></div>
  <div className="col">{'>'}</div>
</div>
<div className="row">
  <div className="col"><a href="#">Shirt and Top</a></div>
  <div className="col">{'>'}</div>
</div>
<div className="row">
  <div className="col"><a href="#">Sweater & Cardigans</a></div>
  <div className="col">{'>'}</div>
</div>

<div className="row">
  <div className="col"><a href="#">Outwears</a></div>
  <div className="col">{'>'}</div>
</div>
<div className="row">
  <div className="col"><a href="#">Bags</a></div>
  <div className="col">{'>'}</div>
</div>
<div className="row">
  <div className="col"><a href="#">Shoes</a></div>
  <div className="col">{'>'}</div>
</div>
<div className="row">
  <div className="col"><a href="#">Accesories</a></div>
  <div className="col">{'>'}</div>
</div>
<p style={{fontSize:12,color:"#F3692E",textAlign:"center", padding:20}}>Load more</p>
<div className="col" style={{height:423,width:296,backgroundColor:"#F86338"}}>
  
  <p style={{color:"white",fontWeight:700, paddingLeft:15,fontSize:39,paddingTop:70}}>March
  <br/> Discount</p>
  <p style={{color:"white",fontSize:24,fontWeight:400, paddingLeft:15}}>Up to 70% Off for <br/> All Items in March</p>
  <button style={{color:"black",backgroundColor:"white",borderRadius:10,position:"relative",right:-15}}>Get it {'>'}</button>
</div>

</div>
  <div className="col-9" >
     <SearchComponent/> 
     <AllProducts/>
  </div>
 
</div>
    </>
)
}