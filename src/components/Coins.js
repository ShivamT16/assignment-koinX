import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./coins.css"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, marginRight:"0.5rem", padding: "0.5rem",background: "lightgrey", borderRadius:"4rem" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, marginLeft:"2.5rem", padding: "0.5rem",background: "lightgrey", borderRadius:"4rem" }}
        onClick={onClick}
      />
    );
  }

export const Coins = () => {
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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

    return(
        <div className="coins-main">
            <h2>You May Also Like</h2>
            <Slider {...settings} >
            {
             coin.map((items) => (
                <div  className="coins">
                
                <div> 
                    <div className="coin-main"> 
                    <img className="coin-logo" alt="logo" src={items.item.small} ></img>
                    <p className="coin-name" ><strong>{items.item.symbol}</strong></p>
                    <p className="coin-difference" style={{"color": items.item.data.price_change_percentage_24h.usd > 0 ? "green" : "red"}} >{items.item.data.price_change_percentage_24h.usd.toFixed()/100} % </p>
                    </div>
                    <h3 className="coin-price" >{items.item.data.price} </h3>
                    <img alt="chart" src={items.item.data.sparkline} ></img>
                    
                </div>
                
                </div>
             )  )
            }
            </Slider>
            <h2>Trending Coins</h2>
            <Slider {...settings} >
            {
             coin.map((items) => (
                <div  className="coins">
                
                <div> 
                    <div className="coin-main"> 
                    <img className="coin-logo" alt="logo" src={items.item.small} ></img>
                    <p className="coin-name" ><strong>{items.item.symbol}</strong></p>
                    <p className="coin-difference" style={{"color": items.item.data.price_change_percentage_24h.usd > 0 ? "green" : "red"}} >{items.item.data.price_change_percentage_24h.usd.toFixed()/100} % </p>
                    </div>
                    <h3 className="coin-price" >{items.item.data.price} </h3>
                    <img alt="chart" src={items.item.data.sparkline} ></img>
                    
                </div>
                
                </div>
             )  )
            }
            </Slider>
        </div>
    )
}