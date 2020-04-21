import React from 'react';
import { action } from '@storybook/addon-actions';
import  ContactMe  from '../components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'ContactMe',
  component: ContactMe,
};


export const Emoji = () => (
  <ContactMe onClick={action('button-click')}>
    
  </ContactMe>
);
