import React, {useContext} from 'react';
import {Button } from 'react-bootstrap';
import { ContactContext } from '../context/contactContext';
import axios from 'axios';

const ButtonInput = () => {
const [state, setState] = useContext(ContactContext);

    const submitMessage = () => {
        axios.post('http://localhost:3001/email', {data:'hello kind sir'})
    }


    return(
        <div>
            <Button onClick={submitMessage} >submit</Button>
        </div>
    )
}

export default ButtonInput