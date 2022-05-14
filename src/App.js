import './App.css';
import Artist from './components/Artist/Artist';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import ArtWorks from './components/ArtWorks/ArtWorks';
import Collection from './components/Collection/Collection';
import Editorial from './components/Editorial/Editorial';
import Events from './components/Events/Events';
import Subscription from './components/Subscription/Subscription';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className='new-home-content'>
        <Header />
        <Carousel />
        <Artist />
        <ArtWorks />
        <Collection />
        <Editorial />
        <Events />
      </div>
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
