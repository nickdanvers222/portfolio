import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../assets/resized.png'
const ProjectItem = () => {



    return (
        <div className='project-item' style={ProjectItemStyles}>
            <Image src={logo} />
        </div>

    )
}

export default ProjectItem

const ProjectItemStyles = {
    border:'2px solid black',
    borderRadius:180,
    width:'60vw',
    height:'250px',
    display:'flex'
};

const ProjectItemImage = {

}