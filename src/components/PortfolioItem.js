import React, {useState} from 'react';
import './PortfolioItem.css'
import { Image } from 'react-bootstrap';
import iphone from '../assets/RCiphone.png'

const PortfolioItem = (props) => {

    return (
        <div className='portfolio-item' >
            <Image src={iphone}/>
        </div>

    )
}

export default PortfolioItem

