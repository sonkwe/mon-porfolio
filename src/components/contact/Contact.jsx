import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

       const form = useRef();
       const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jm08yc2', 'template_mwlrqzr', form.current, 'oYeQGFc6mJ73jkyzq')
        e.target.reset()
       
      };

    return (
        <section id='contact'>
            <h5>Get In Touh</h5>
            <h2>Contacter Moi</h2>

            <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                <MdOutlineEmail  className='contact__option-icon'/>
                <h4>Email</h4>
                    <h5>mekemdeste@gmail.com</h5>
                    <a href="mailto:mekemdeste@gmail.com"> Send a message</a>
                </article>
                <article className="contact__option">
                <RiMessengerLine className='contact__option-icon' />
                <h4>Messenger</h4>
                    <h5>mekem deste</h5>
                    <a href="https://m.me/home.php?tbua=1" target="_blank"> Send a message</a>
                </article>
                <article className="contact__option">
                <BsWhatsapp className='contact__option-icon' />
                <h4>Email</h4>
                    <h5>+237697849026</h5>
                    <a href="https://api.whatsapp.com/send?phone=+237697849026" target="_blank"> Send a message</a>
                </article>
            </div>

            {/* fin des options de contacts */}
            <form ref={form}  onSubmit={sendEmail} >
              <input type="text" name='name' placeholder='Entrer votre Nom' required/>
              <input type="text" name='email' placeholder='Entrer votre Email' required/>
              <textarea name="message"  rows="7" placeholder='Entrer votre message'></textarea>
              <button type='submit' className='btn btn-primary'> Envoyer</button>
            </form>
            </div>
        </section>
    );
};

export default Contact;