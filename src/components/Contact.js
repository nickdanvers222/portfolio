import React,{useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import EmailInput from './EmailInput'
import './Contact.css'
import { ContactContextProvider, ContactContext } from '../context/contactContext';

const ContactMe = () => {
    const [state, setState] = useContext(ContactContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(state)
    }


    return(
        <div className='contact-div'>
            <ContactContextProvider>
          <p>Contact me!</p>
          <EmailInput />
          </ContactContextProvider>
        </div>
    )
}
export default ContactMe