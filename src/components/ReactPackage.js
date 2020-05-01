import React from 'react';
import reactLogo from '../assets/react.png'

const ReactPackage=()=>{

    return(
        <a className='package-anchor' href='https://reactjs.org/' style={{textDecoration: 'none'}}>
            <div>
                <div style={{backgroundImage:'url('+reactLogo+')', backgroundPosition:'center'}} className='package' ></div>
                <p className='package-button-text'>React JS</p>

            </div>
        </a>

    )
};
export default ReactPackage