import './App.css';
import Header from './components/Header.jsx';
import coffeeImage from './assets/images/775.png';
import coffeeRing from './assets/images/776.png';
import hotCoffeeImage from './assets/images/777.png';
import whiteCoffeeImage from './assets/images/777.png';
import voucherImage from './assets/images/voucher.png';
import ellaImage from './assets/images/ella.png';
import johnImage from './assets/images/john.png';
import newYorkImage from './assets/images/newYork.png';
import jakartaImage from './assets/images/jakarta.png';
import parisImage from './assets/images/paris.png';
import wave1 from './assets/waves/wave1.png';
import wave2 from './assets/waves/wave2.png';
import wave3 from './assets/waves/wave3.png';
import wave4 from './assets/waves/wave4.png';
import wave5 from './assets/waves/wave5.png';




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
          <div className='box'>
            <h1 className='h1_2'>Black Coffees</h1>
            <button className='ordersButton'>Order Now</button>
          </div>
          <div className='box'>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
        </div>

        <img src={wave2}  className='wave2'/>
        <div className='thirdPage'>
          <img src={hotCoffeeImage}  className='hotCoffeeImage'/>
          <div className='secondBox'>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
          <div className='secondBox'>
              <h1 className='h1_2'>Hot Coffees</h1>
              <button className='ordersButtons'>Order Now</button>
          </div>
        </div>

        <div className='fourthPage'>
        <img src={whiteCoffeeImage}  className='whiteCoffeeImage'/>
          <div className='thirdBox1'>
            <h1 className='h1_2'>White coffe</h1>
            <button className='OrdersButtons'>Order Now</button>
          </div>
          <div className='thirdBox'>
          <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>
        </div>

        <div className='fifthPage'>
          <h1 className='h1_2'>Voucher</h1>
          <img src={voucherImage}  className='voucherImage'/>
          <button className='getButton'>Get Voucher Now</button>
        </div>


        <div className='reviewsPage'>
          <h1 className='h1'>Customer Reviews</h1>
            <div className='reviewsBox'>
              <div className='ellaReviewsBox'>
                <img src={johnImage}  className='johnImage'/>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
               </div>
                <div className='jonhReviewsBox'>
                  <img src={ellaImage}  className='ellaImage'/>
                  <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
            <img src={wave3}  className='wave3'/>
        </div>

        <div className='openPage'>
          <h1 className='h1_2'>We are open</h1>
          <h2 className='h2'>Monday - Friday</h2>
          <p className='p'>10:00 am- 10:00pm</p>
          <h2 className='h2'>Saturday and Sunday</h2>
          <p className='p'>10:00 am- 10:00pm</p>
          
        </div>
        <img src={wave4}  className='wave4'/>


        <div className='branchesPage'>
          <h1 className='h1_2'>Our Branches</h1>

          <div className='branches'>
            <img src={newYorkImage}  className='newYorkImage'/>
            <h1 className='name'>New York</h1>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>

          <div className='branches'>
            <img src={jakartaImage}  className='jakartaImage'/>
            <h1 className='name'>Jakarta</h1>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>

          <div className='branches'>
            <img src={parisImage}  className='parisImage'/>
            <h1 className='name'>Paris</h1>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            
          </div>
          
        </div>

        <img src={wave5}  className='wave5'/>
        <div className='information'>
        <h1 className='name'>YOUR LOGO</h1>
        <div className='textBox'>
          <h1>Information</h1>
          <h1>About us</h1>
          <h1>Branches</h1>
          <h1>Menu</h1>
          <h1>Contact</h1>
          <h1>Map</h1>
        </div>
        

        </div>
    </>
  );

}

export default App
