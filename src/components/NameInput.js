import React,{useContext} from 'react'
import { ContactContext } from '../context/contactContext'

const NameInput = () => {
const [state, setState] = useContext(ContactContext)

        const handleChange = async (event)=>{
            let val = event.target.value
            await setState(prevState => ({...prevState, name: val}))
            console.log(state)
        }

      

    return (
        <div>
          <input className='contact-input' value={state.name} type="text" onChange={handleChange} />
        </div>
    )
}
export default NameInput