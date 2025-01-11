import { useEffect, useState } from "react"

export const useTrendingCoins = () => {
    const [coin, setCoin] = useState([])
    
    useEffect(() => { fetchCoins() }, [] )

    const fetchCoins = async () => {
      try{
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
        const coinsData = await response.json()
        setCoin(coinsData.coins)
        }
      catch (error) {
        console.error(error)
        }
     }
    
    return coin;
}