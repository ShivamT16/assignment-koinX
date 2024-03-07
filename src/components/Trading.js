import React, { useEffect, useRef, memo,useState } from 'react';
import bitcoinCoin from "./images/bitcoinCoin.png"
import "./trading.css"

export function TradingViewWidget() {
  const container = useRef();

    const [coin, setCoin] = useState()
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr")
    .then((res) =>{
      return res.json();
    } )
    .then((data) => {
      console.log(data.bitcoin)
      setCoin(data.bitcoin);
    })
  }, [] )

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1D"
            ]
          ],
          "chartOnly": true,
          "width": 550,
          "height": 400,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": true,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 2,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 1)"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="Trading">
      <div className="trading-main">
      <img className='coin-images' alt="" src={bitcoinCoin}></img> 
      <h3>Bitcoin</h3>
      <p>BTC</p>
      </div>
      <h3>$ {coin.usd}</h3>
      <p>₹ {coin.inr}</p>
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
