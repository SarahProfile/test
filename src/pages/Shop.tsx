import AllProducts from "../components/AllProducts"
import BestSeller from "../components/BestSeller"
import OfferBanner from "../components/OfferBanner"
import ShopBanner from "../components/ShopBanner"
import { ShopCatogire } from "../components/ShopCatogire"

export function Shop()
{
    return ( 
        <>
    <ShopBanner/>
    <ShopCatogire/>
    <AllProducts />
    <OfferBanner/>
    <h1 style={{paddingTop:150, paddingBottom:50}}>Recommended for you</h1>
    <BestSeller/>
    </>
    )
   
}