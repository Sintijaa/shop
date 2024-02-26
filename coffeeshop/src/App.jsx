import './App.css';
import Header from './components/Header.jsx';
import coffeeImage from './assets/images/775.png';
import coffeeRing from './assets/images/776.png';
import hotCoffeeImage from './assets/images/777.png';
import wave1 from './assets/waves/wave1.png';
import wave2 from './assets/waves/wave2.png';

function App() {

  return (
    <>
        <Header />
        <img src={wave1}  className='wave1'/>
        <div className='firstPage'>
        <img src={coffeeImage}  className='coffeeImage'/>
          <div className='contents'>
            <h1 className='h1'>Coffee Time</h1>
            <h2 className='h2'>Your Headline</h2>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <button className='orderButton'>Order Now</button>
          </div>
        </div>
        <div className='secondPage'>
        <img src={coffeeRing}  className='coffeeRing'/>
          <h1 className='h1_2'>Black Coffees</h1>
          <button className='orderButton'>Order Now</button>
        </div>
        <img src={wave2}  className='wave2'/>
        <div classname='thirdPage'>
        <img src={hotCoffeeImage}  className='hotCoffeeImage'/>
        
       
        </div>
    </>
  );

}

export default App
