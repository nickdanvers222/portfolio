import React,{useContext} from 'react'
import { ContactContext } from '../context/contactContext'

const MessageInput = () => {
const [state, setState] = useContext(ContactContext)

const handleChange = async (event)=>{
    let val = event.target.value
    await setState(prevState => ({...prevState, message: val}))
    console.log(state)
}

      

    return (
        <div>
          <textarea className='contact-message' value={state.message} type="text" onChange={handleChange} />
        </div>
    )
}
export default MessageInput