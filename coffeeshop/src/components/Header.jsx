import '../style/header.css'
import icon from '../assets/logo.png';

function Header() {

  return (
    <>
        <div className='header'>
            <div className='elements'>
                <h2 className='h2'>Home</h2>
                <h2 className='h2'>About</h2>
                <h2 className='h2'>Menu</h2>
                <h2 className='h2'>Blog</h2>
                <h2 className='h2'>Shop</h2>
                <h2 className='h2'>Contact</h2>
            </div>
            <div className='iconElement'>
                <img src={icon} className='icon' />
            </div>
        </div>
    </>
  );

}

export default Header
