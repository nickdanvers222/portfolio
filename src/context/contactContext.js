import React, {createContext, useState} from 'react';

const ContactContext = createContext([{}, () => {}]);

const  ContactContextProvider = (props) => {

  const [state, setState] = useState({
    name: "",
    email: "",
    message:"",
  });

  return (
    <ContactContext.Provider 
    value={[state, setState]}
    >
    {props.children}
    </ContactContext.Provider>
  )
}


export {ContactContext, ContactContextProvider};