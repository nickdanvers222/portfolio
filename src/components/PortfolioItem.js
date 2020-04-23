import React, {useState} from 'react';
import './PortfolioItem.css'
import { Image, Button } from 'react-bootstrap';
import iphone from '../assets/RCiphone.png'

const PortfolioItem = (props) => {

    return (
        <div className='portfolio-item' >
            <div className='portfolio-item-text'>
                <h1 style={{borderBottom:`1px solid ${props.item.color}`}}>{props.item.title}</h1>
                <p>{props.item.description}</p>
                <Button className='portfolio-item-button'>View on Github</Button>
            </div>

            <div className='portfolio-item-image'></div>
            {/* <Image className='portfolio-item-image' src={iphone}/> */}
        </div>

    )
}

export default PortfolioItem

