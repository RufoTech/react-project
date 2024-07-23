import React, {useRef} from 'react';
import emailjs from "@emailjs/browser"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
    
    const menimFormum = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
      if(menimFormum.current) {
        emailjs
        .sendForm('service_c1w983b', 'template_bea5av3', menimFormum.current, {
          publicKey: 's43nAAmtiKz6NHZMr',
        })
        .then(
          () => {
            toast.success("Mesaj ugurla gonderildi")
          
          },
          () => {
            toast.error("Serverde xeta var. Bir az sonra cehd edin.")

          },

          
        );

        menimFormum.current.reset()
      }

      
      };




  return (

    <div className="contact-form">
        <div className="container d-flex justify-content-center align-items-center">
               <form onSubmit={sendEmail} ref={menimFormum}>

<div className="form-group">
        <label htmlFor="ad">Name</label>
        <input
          type="text"
          className="form-control shadow-none"
          id="ad"
          placeholder="Name"
          name='adiniz'
         
          
        />
      </div>

   


      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control shadow-none"
         id='email'
          placeholder="email"
          name='epoct'
          
          
        />
       
      </div>

      <div className="form-group">
        <label htmlFor="message">Mesajiniz</label>
        <textarea
         
          className="form-control shadow-none"
         id='message'
          placeholder="Message"
          name='mesaj'
          
          
        />
      
      </div>

<div className="d-flex justify-content-center mt-4">
<button type="submit" className="btn btn-success">
        Send
      </button>
</div>
    
     
    </form>
        </div>
       
    </div>
  
  );
};

export default Contact;
