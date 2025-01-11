import { TrendingCoins } from "./TrendingCoin";

export const Coins = () => {

    return(
        <div className="bg-white py-6 px-[4%]">

          <h2 className="text-2xl font-semibold py-4">You May Also Like</h2>
          <TrendingCoins />
            
          <h2 className="text-2xl font-semibold py-4">Trending Coins</h2>
          <TrendingCoins />
            
        </div>
    )
}