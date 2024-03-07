import './App.css';
import {Nav} from "./components/Nav"
import { TradingViewWidget } from './components/Trading';
import { Overview } from './components/Overview';
import { Sentiments } from './components/Sentiments';
import { Bitcoin } from './components/Bitcoin';
import { Tokenomics } from './components/Tokenomics';
import {Team} from "./components/Team"
import { Coins } from './components/Coins';
import { TrendingCoin } from './components/TrendingCoin';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <p className="headline">Cryptocurrencies {'>>'} Bitcoin</p>
      <div className='App-main'>
      <div className='App-left'>
      <TradingViewWidget></TradingViewWidget>
      <Overview></Overview>
      <Sentiments></Sentiments>
      <Bitcoin></Bitcoin>
      <Tokenomics></Tokenomics>
      <Team></Team>
      </div>
      <div className='App-right'>
      <TrendingCoin></TrendingCoin>
      </div>
      </div>
      <Coins></Coins>
    </div>
  );
}

export default App;
