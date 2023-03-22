
import BestSeller from "../components/BestSeller"
import ShopBanner from "../components/ShopBanner"
import { ShopFilterComponent } from "../components/ShopFilterComponent"


export function ShopFilter()
{
    return ( 
        <>
    <ShopBanner/>
   
    <ShopFilterComponent/>
    
    <h1 style={{paddingTop:150, paddingBottom:50}}>Recommended for you</h1>
    <BestSeller/>
    </>
    )
   
}