import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
    return (
       <footer>
        <a href="#" className='footer__logo'>Deste</a>

        <ul className='permalinks'>
            <li> <a href="#">Home</a> </li>
            <li> <a href="#about">About</a> </li>
            <li> <a href="#experience">Experience</a> </li>
            <li> <a href="#services">Services</a> </li>
            <li> <a href="#portfolio">Portfolio</a> </li>
            <li> <a href="#testimonials">Testimonials</a> </li>
            <li> <a href="#contact">Contact</a> </li>
        </ul>

        <div className="footer__socials">
            <a href="htpps://facebook.com"> <BsFacebook /></a>
            <a href="htpps://instagram.com"> <FaInstagramSquare /></a>
            <a href="htpps://twitter.com"> <FaTwitterSquare /></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; DESTE developpeur. All rights reserved</small>
        </div>
       </footer>
    );
};

export default Footer;