import React from 'react';
import { action } from '@storybook/addon-actions';
import  ProjectItem  from '../components/ProjectItem';
import logo from '../assets/resized.png'
let recipeCapture={
  title:'Recipe Capture',
  description:'Recipe Capture is a React Native application which uses the clarifai and spoonacular API to serve a user recipes for the ingredients they take pictures of, amazing!'
}

export default {
  title: 'ProjectItem',
  component: ProjectItem,
};


export const Emoji = () => (
  <ProjectItem description={recipeCapture.description} title={recipeCapture.title} src={logo} onClick={action('button-click')}>
    
  </ProjectItem>
);
