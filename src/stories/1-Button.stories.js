import React from 'react';
import { action } from '@storybook/addon-actions';
import  Gallery  from '../components/Carousel';

export default {
  title: 'Gallery',
  component: Gallery,
};


export const Emoji = () => (
  <Gallery onClick={action('clicked')}>
 
  </Gallery>
);
