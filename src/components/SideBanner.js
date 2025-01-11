import { useTrendingCoins } from "../utils/useTrendingCoins";

export const SideBanner = () => {
  
    const coin = useTrendingCoins()    
  
    return(
        <div className="md:w-1/3">
            <div className="text-center bg-blue-600 rounded-2xl text-white p-10" >
                <h3 className="text-2xl font-semibold px-6">Get Started with KoinX for FREE</h3>
                <p className="text-sm leading-6 py-2">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                <img className="w-[70%] rounded-xl mx-12 my-2" alt="ad" src="https://img.freepik.com/free-vector/businessman-with-bulb_24877-76642.jpg?t=st=1709796858~exp=1709800458~hmac=bb0541cbfe75b85a70ae1abfa9214949bc110a1c2e8cafa67f3c71f72e06034f&w=740" ></img>
                <button className="text-black bg-white font-bold mt-2 rounded-lg py-2.5 px-8">Get Started for FREE {">"} </button>
            </div>

            <div className="bg-white rounded-xl p-4 my-4">
            <h2 className="text-2xl font-bold py-2">Trending Coins (24h)</h2>
            {
             coin.slice(0,3).map((items) => (
                <div key={items.item.symbol} className="flex justify-between items-center"> 

                  <div className="flex justify-between items-center py-2">
                    <img className="h-6 rounded-full" alt="Coinlogo" src={items.item.small} ></img>
                    <p className="font-medium px-2">{items.item.name} ({items.item.symbol})</p>
                  </div>

                    <p className={`w-20 px-4 py-1 rounded-lg ${items.item.data.price_change_percentage_24h.usd > 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`} >
                     {items.item.data.price_change_percentage_24h.usd.toFixed()/100}% </p>

                </div>
            ) ) }
            
            </div>
        </div>
    )
}