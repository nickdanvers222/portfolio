import React,{useContext} from 'react'
import { ContactContext } from '../context/contactContext'

const EmailInput = () => {
const [state, setState] = useContext(ContactContext)

        const handleChange = (event)=>{
            // setState(prevState => ({ ...prevState, email:event.target.value}));
            setState({email: event.target.value})
            console.log(event.target.value)
        }

      

    return (
        <div>
           <label>
          Name:
          <input type="text" onChange={handleChange} />
        </label>
        <div>{state.email}</div>
        </div>
    )
}
export default EmailInput