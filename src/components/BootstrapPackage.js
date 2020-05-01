import React from 'react';
import bootstrapLogo from '../assets/bootstrap.png'

const BootstrapPackage=()=>{

    return(
        <a className='package-anchor' href='https://reactjs.org/' style={{textDecoration: 'none'}}>
            <div>
                <div style={{backgroundImage:'url('+bootstrapLogo+')', backgroundPosition:'center'}} className='package' ></div>
                <p className='package-button-text'>Bootstrap</p>

            </div>
        </a>

    )
};
export default BootstrapPackage