import './experience.css';
import {AiFillCheckCircle} from 'react-icons/ai';

const Experience = () => {
    return (
       <section id='experience'>
       <h5>Quelles sont mes competences</h5>
       <h2>Mon Experience</h2>

        <div className="container experience__container">
            <div className="exprerience__frontend">
                <h3>Developpement Frontend</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                      <div>
                      <h4>HTML</h4>
                        <small className='text-align'>Excelent</small>
                      </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                       <div>
                       <h4>CSS</h4>
                        <small className='text-align'>Bonne</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                       <div>
                       <h4>javascript</h4>
                        <small className='text-align'>Bonne</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                       <div>
                       <h4>Bootstrop</h4>
                        <small className='text-align'>Excelent</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                      <div>
                      <h4>react js</h4>
                        <small className='text-align'>Bonne</small>
                      </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                       <div>
                       <h4>Wordpress</h4>
                        <small className='text-align'>moyenne</small>
                       </div>
                    </article>
                </div>
            </div>

                <div className="experience__backend">
                <h3>Developpement Backend</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                      <div>
                      <h4>Node js</h4>
                        <small className='text-align'>Excelent</small>
                      </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'  />
                       <div>
                       <h4>MongoDB</h4>
                        <small className='text-align'>Bonne</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                       <div>
                       <h4>MySQL</h4>
                        <small className='text-align'>Bonne</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                      <div>
                      <h4>PHP</h4>
                        <small className='text-align'>Excelent</small>
                      </div>
                    </article>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon' />
                      <div>
                          <h4>Wordpress</h4>
                        <small className='text-align'>moyenne</small>
                      </div>
                    </article>
                    </div>
                </div>
            </div>
            
    </section>
    );
};

export default Experience;