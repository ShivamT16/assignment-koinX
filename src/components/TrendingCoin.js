import { useEffect, useState } from "react";
import "./trendingCoin.css"

export const TrendingCoin = () => {
    const [coin, setCoin] = useState([])
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
    .then((res) =>{
      return res.json();
    } )
    .then((data) => {
    //   console.log(data.coins)
      setCoin(data.coins);
    })
  }, [] )

    return(
        <div >
            <div className="right-ad" >
                <h3>Get Started with KoinX for FREE</h3>
                <p>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                <img className="right-ad-img" alt="ad" src="https://img.freepik.com/free-vector/businessman-with-bulb_24877-76642.jpg?t=st=1709796858~exp=1709800458~hmac=bb0541cbfe75b85a70ae1abfa9214949bc110a1c2e8cafa67f3c71f72e06034f&w=740" ></img>
                <p className="ad-start"><strong>Get Started for FREE {"->"}</strong> </p>
            </div>
            <div className="trending-coin">
            <h2>Trending Coins (24)</h2>
            {
             coin.slice(0,3).map((items) => (
                <div className="trend-coins"> 
                <div className="trend-coinss">
                    <img className="coin-image" alt="logo" src={items.item.small} ></img>
                    <p>{items.item.name}</p>
                    <p className="coin-name" >({items.item.symbol})</p>
                    </div>
                    <div>
                    <p className="price-Change" style={{"color": items.item.data.price_change_percentage_24h.usd > 0 ? "green" : "red"}} >{items.item.data.price_change_percentage_24h.usd.toFixed()/100} % </p>
                   </div>
                </div>
             )  )
            }
            </div>
        </div>
    )
}