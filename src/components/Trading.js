import React, { useEffect, useRef, memo,useState } from 'react';
import bitcoinCoin from "./images/bitcoinCoin.png"

export function TradingViewWidget() {
  const container = useRef();

    const [coin, setCoin] = useState(null)

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr');
        const data = await response.json();
        if (data.bitcoin && (coin?.usd !== data.bitcoin.usd || coin?.inr !== data.bitcoin.inr)) {
          setCoin(data.bitcoin);
        }
      } catch (error) {    
        console.error(error)
      }
    }

    useEffect(() => {
      const fetchDataInterval = setInterval(fetchData, 60000); 
      fetchData();
  
      return () => clearInterval(fetchDataInterval);
    }, [coin]); 

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "400",
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "hide_top_toolbar": true,
          "range": "1M",
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
      
    }, []
  );
  
  return (
    <div className="bg-white rounded-lg px-6 pb-6">

      <div className="flex gap-2 py-6">
       <img className='h-9 rounded-full' alt="" src={bitcoinCoin}></img> 
       <h2 className='font-bold text-2xl'>Bitcoin</h2>
       <p className='text-slate-600 text-lg font-medium'>BTC</p>
       <p className='text-white bg-slate-400 font-medium p-2 rounded-lg mx-4'> Rank #1 </p>
      </div>

      <h3 className='font-bold text-3xl'>${coin?.usd}</h3>
      <h4 className='font-semibold text-lg mb-4' >₹{coin?.inr}</h4>

    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>

    </div>
  );
}

export default memo(TradingViewWidget);
