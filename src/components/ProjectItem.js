import React, {useState} from 'react';
import { Image } from 'react-bootstrap';
import './ProjectItem.css'

const ProjectItem = (props) => {
const [state, setState] = useState('')
const {title, description } = props
    

    return (
        <div className='project-item' onClick={()=>{window.open(props.url)}}>
            <Image className='project-item-image' src={props.src}/>
            <div className='project-background-image'></div>
            <h2 className='project-item-title' >{title}</h2>
            <div className='project-seperator'></div>
            <h4 className='project-item-description' >{description}</h4>
        </div>

    )
}

export default ProjectItem

