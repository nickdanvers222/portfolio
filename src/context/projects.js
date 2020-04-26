import iphone from '../assets/RCiphone.png'
import laptop from '../assets/scheduler2.png'
import ipad from '../assets/otg1.png'




const recipeCapture = {
    title:'Recipe Capture',
    stack:'React-Native, Express, Clarifai & Spoonacular',
    description:"A React Native application which uses the clarifai and spoonacular API to serve a user recipes for the ingredients they've taken a picture of, amazing!",
    url:'https://github.com/Ravenor222/Recipe-Capture',
    color:'lightsalmon',
    photo:iphone,
  }
  const scheduler = {
    title:'Interview Scheduler',
    stack:'React JS, PSQL, SCSS, Express',
    description:'A time management platform that allows a fictional set of students access to scheduling meetings/appointments with different staff members ',
    url:'https://github.com/Ravenor222/react-scheduler',
    color:'#222f3e',
    photo:laptop
  }
  const onTheGo = {
    title:'On The Go!',
    stack:'Javascript, EJS, PSQL, Jquery, Express, Twilio',
    description:'A Single-Page food ordering app, using Twilio to communicate with a restaurant and Jquery to dynamically build the menu retrieved from a PSQL database',
    url:'https://github.com/Ravenor222/Food-Ordering-SPA',
    color:'#ffc107',
    photo:ipad
  }
  const tweeter = {
    title:'Tweeter',
    stack:'EJS, Javascript, Jquery, Express',
    description:'A time management platform that allows a fictional set of students access to scheduling meetings/appointments with different staff members ',
    url:'https://github.com/Ravenor222/react-scheduler',
    color:'#222f3e',
    photo:laptop
  }
  
  export { tweeter, onTheGo, scheduler, recipeCapture }