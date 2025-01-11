import { useState } from "react";
import { useTrendingCoins } from "../utils/useTrendingCoins";

export const TrendingCoins = () => {

  const [slide, setSlide] = useState(0)

  const coin = useTrendingCoins()

  const handleNext = () =>{
    slide > coin.length - slide/3 ? setSlide(slide) : 
    setSlide(slide + 3)
  }
  const handlePrevious = () => {
    slide === 0 ? setSlide(0) : setSlide(slide - 3)
  }

    return(
        <div className="relative">
          <div className="flex gap-2.5 overflow-hidden">    
            {
             coin.map((items) => (
              <div key={items.item.symbol}>
                
                <div className="border-2 rounded-xl p-4 w-60" style={{transform: `translateX(-${slide *100}%)`, transitionDuration: "1s" }}> 
                  <div className="flex items-center gap-2"> 
                     <img className="h-6 rounded-full" alt="logo" src={items.item.small} ></img>
                     <p>{items.item.symbol}</p>
                     <p className={`w-fit px-1 ${items.item.data.price_change_percentage_24h.usd > 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`} >
                     {items.item.data.price_change_percentage_24h.usd.toFixed()/100}% </p>
                  </div>

                  <h3 className="text-xl font-medium py-2" >${items.item.data.price.toFixed(6)} </h3>
                  <img alt="chart" className="w-[80%] h-14 mx-4" src={items.item.data.sparkline} ></img>
                    
                </div>
                
              </div>
             ) ) }
            </div>

            <div className="flex justify-between">
            <button onClick={handlePrevious} className="bg-slate-200 h-fit text-xl bottom-24 px-3 text-slate-500 font-bold py-1.5 rounded-full relative"> {"<"} </button>        
            <button onClick={handleNext} className="bg-slate-200 h-fit text-xl bottom-24 px-3 text-slate-500 font-bold py-1.5 rounded-full relative"> {">"} </button>
            </div>

            </div>
            
    )
}