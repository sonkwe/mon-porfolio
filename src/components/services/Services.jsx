import './services.css';
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
    return (
       <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className='service'>
            <div className="service__head">
                <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
            </ul>
            </article>
            <article className='service'>
            <div className="service__head">
                <h3> Developpement web</h3>
            </div>

            <ul className='service__list'>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
            </ul>
            </article>
            <article className='service'>
            <div className="service__head">
                <h3> Wordpress</h3>
            </div>

            <ul className='service__list'>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
                <li>
                    <BsCheck2 className='servie__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
            </ul>
            </article>
        </div>
       </section>
    );
};

export default Services;