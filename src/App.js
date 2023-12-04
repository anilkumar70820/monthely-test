import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Hero from './components/Hero';
import TopNft from './components/TopNft';
import ExplorerNft from './components/ExplorerNft';
import TopMarketNft from './components/TopMarketNft';
import NftCategory from './components/NftCategory';
import BackToTop from './components/BackToTop';

function App() {
  return (
  <>
  <Hero/>
  <TopNft/>
  <ExplorerNft/>
  {/* <TopMarketNft/> */}
  <NftCategory/>
  <BackToTop/>
  </>
  );
}

export default App;
