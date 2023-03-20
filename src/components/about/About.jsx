import './about.css'
import Moi from '../../assets/me-about.jpg'
import {BiBook} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

const About = () => {
    return (
       <section id='about'>
        <h5>Get TO know</h5>
        <h2>Apropos de Moi</h2>

        <div className="container about__container">
          <div className="about__me">
           <div className="about__me-image">
            <img src= {Moi} alt="About__me" />
           </div>
          </div>
          <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiBook className='about__icon' />
             <h5> Experience</h5>
             <small> 2 ans experiences</small>
            </article>
            <article className='about__card'>
              <BiUser className='about__icon' />
             <h5>Clients</h5>
             <small> 2+ clients</small>
            </article>
            <article className='about__card'>
              <RiServiceLine className='about__icon' />
             <h5> Projets</h5>
             <small> 25+ projets</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sunt distinctio repellendus 
            dignissimos officiis voluptas veritatis, accusamus illo id sed excepturi magni. Quisquam 
            molestiae quaerat sunt ut explicabo accusantium neque.voluptas veritatis, accusamus illo id 
            sed excepturi magni. Quisquam 
          </p>

          <a href="#contact" className='btn btn-primary'> Me Contater</a>
          </div>
        </div>
      </section>
    )
};

export default About;