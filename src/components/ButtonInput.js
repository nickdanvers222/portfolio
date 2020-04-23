import React, {useContext} from 'react';
import {Button } from 'react-bootstrap';
import { ContactContext } from '../context/contactContext';
import axios from 'axios';

const ButtonInput = () => {
const [state, setState] = useContext(ContactContext);


    const submitMessage = async () => {
        axios.post('http://localhost:3001/email', {data:state});
        // modal? 
        await setState(prevState => ({email:'', name:'', message:''}))
        alert('Your email has been sent!')
    }


    return(
        <div>
            <Button  className='input-button' onClick={submitMessage} >submit</Button>
        </div>
    )
}

export default ButtonInput