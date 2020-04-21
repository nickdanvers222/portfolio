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
        <div className='contact-div'>
          <ContactContextProvider>
            <h4>Contact me!</h4>
            <p>name:</p>
            <NameInput />
            <p>email:</p>
            <EmailInput state={state} setState={setState}/>
            <p>message:</p>
            <MessageInput />
            <ButtonInput />
            {/* <Button onSubmit={()=>{console.log("ive been submitted")}}>Send</Button> */}
          </ContactContextProvider>
        </div>
    )
}
export default ContactMe