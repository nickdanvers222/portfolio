import React,{useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import MessageInput from './MessageInput';
import ButtonInput from './ButtonInput';
import './Contact.css';
import { ContactContextProvider, ContactContext } from '../context/contactContext';

const ContactMe = () => {
    const [state, setState] = useContext(ContactContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(state)
    }


    return(
        <div id='contact' className='contact-div'>
          <ContactContextProvider>
            <h4 className='input-title'>Contact me!</h4>
            <p className='input-label'>Name</p>
            <NameInput />
            <p className='input-label'>Email</p>
            <EmailInput state={state} setState={setState}/>
            <p className='input-label'>Message</p>
            <MessageInput />
            <ButtonInput />
            {/* <Button onSubmit={()=>{console.log("ive been submitted")}}>Send</Button> */}
          </ContactContextProvider>
        </div>
    )
}
export default ContactMe