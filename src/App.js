import { Navbar} from "./components/Navbar"
import { TradingViewWidget } from './components/Trading';
import { Overview } from './components/Overview';
import { Sentiments } from './components/Sentiments';
import { Bitcoin } from './components/Bitcoin';
import { Tokenomics } from './components/Tokenomics';
import {Team} from "./components/Team"
import { Coins } from './components/Coins';
import { SideBanner } from './components/SideBanner';

function App() {
  return (
    <div className="bg-slate-100">
      <Navbar />

      <p className="mx-[10%] md:mx-[4%] my-3 text-slate-500 font-medium">Cryptocurrencies »<span className='text-black'> Bitcoin </span></p>
      
      <div className='flex flex-wrap mx-12 gap-6 md:flex-nowrap'>
         <div className='w-full md:w-2/3 ml-2'>
          <TradingViewWidget />
          <Overview />
          <Sentiments />
          <Bitcoin />
          <Tokenomics />
          <Team />
         </div>

         <SideBanner />
      </div>

      <Coins></Coins>
    </div>
  );
}

export default App;
