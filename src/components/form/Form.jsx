import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../form/form.css'

const Form = () => {
    const apiKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const form =useRef();

    const sendForm = (e) => {
        e.preventDefault();
        
        const formCurrent = {
            lastName: form.current[0].value,
            firstName: form.current[1].value,
            email: form.current[2].value,
            phone: form.current[3].value,
            subject: form.current[4].value,
            message: form.current[5].value
        }
        
        emailjs.send(serviceId,templateId, formCurrent, apiKey)
        .then(
            () => {
                alert("Votre message a bien été envoyé - Nous vous répondrons dans les plus brefs délais")
                console.log('success');
        })
        .catch((error) => {
                console.error('Failed',error);
        })

        form.current.reset()
    }

    return (
        <form ref={form} className='contact-form' onSubmit={sendForm}>
            <div className='contact-form-name'>
                <div className='contact-form-name-lastname'>
                  <label htmlFor='lastName'>Nom</label>
                  <input type='text' id='lastName' name='lastName' required/>
                </div>
                <div className='contact-form-name-firstname'>
                  <label htmlFor='firstName'>Prénom</label>
                  <input type='text' id='firstName' name='firstName'/>
                </div>
            </div>
            <div className='contact-form-contact'>
                <div className='contact-form-contact-email'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' name='email' required/>
                </div>
                <div className='contact-form-contact-tel'>
                  <label htmlFor='tel'>Téléphone</label>
                  <input type='tel' id='tel' name='tel'/>
                </div>
            </div>
            <div className='contact-form-objet'>
                <label htmlFor='subject'>Objet</label>
                <input type='text' id='subject' name='subject' required/>
              </div>
              <div className='contact-form-message'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' required></textarea>
            </div>
            <p className='contact-form-info'>Champs obligatoires</p>
            <div className='contact-form-choice'>
                <input type='checkbox' id='choice' name='choice' required/>
                <label htmlFor='choice'>J'accepte que mes données personnelles soient utilisées uniquement pour me recontacter.</label>
            </div>
            <button className='contact-form-button'>Envoyer</button>
        </form>  
    )
}

export default Form

