import CTA from './CTA';
import './header.css';
import  Moi from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
       <header>
        <div className="container header__container">
         <h4>Salut je suis </h4>
         <h1>sonkwe mekem deste</h1>
         <h5 className='text-light'> Developpeur fullstack</h5>
         <CTA />
         <HeaderSocials />
         <div className="me"> 
            <img src={Moi} alt="moi" />
         </div>

         <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
       </header>
    );
};

export default Header;