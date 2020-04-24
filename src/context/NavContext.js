import React, {createContext, useState} from 'react';

const NavContext = createContext([{}, () => {}]);

const  NavContextProvider = (props) => {

  const [state, setState] = useState({
    visibility: false,
  });

  return (
    <NavContext.Provider 
    value={[state, setState]}
    >
    {props.children}
    </NavContext.Provider>
  )
}


export {NavContext, NavContextProvider};