import React, {useState} from 'react';
import './PortfolioItem.css'
import { Image, Button } from 'react-bootstrap';
import iphone from '../assets/RCiphone.png'
import styled from 'styled-components'



const PortfolioItem = (props) => {

    const handleInput = (event) => {
        window.open(props.item.url);
    }
    
    const Styled = styled.button`
        background-color:white;
        border:0;
        border:2px solid ${props.item.color};
        color:black;
        font-size:0.7em;
        border-radius:5px;
        padding-top:0.25vh;
        transition: 0.25s;
        padding-bottom:0.25vh;
        &:hover {
            background-color: ${props.item.color};
            color:white;
          }
    `


    return (
        <div id='project' className='portfolio-item' >
            <div className='portfolio-item-text'>
                <h1 style={{borderBottom:`1px solid ${props.item.color}`}}>{props.item.title}</h1>
                    <h3 className='portfolio-item-stack'>{props.item.stack}</h3>
                <p>{props.item.description}</p>
                {/* <Button style={buttonStyle} className='portfolio-item-button' onClick={handleInput}>View on Github</Button> */}
                <Styled onClick={handleInput}>View On Github</Styled>
            </div>

            <div style={{backgroundImage:'url('+ props.item.photo +')'}} className='portfolio-item-image'></div>
            {/* <Image className='portfolio-item-image' src={iphone}/> */}
        </div>

    )
}

export default PortfolioItem

