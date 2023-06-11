import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './approuter';


// boostrap
import './client/assets/css/bootstrap.min.css'
//fontawesomes
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-image-lightbox/style.css';
import "react-datepicker/dist/react-datepicker.css";
//carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./client/assets/plugins/select2/css/select2.min.css"
import "./client/assets/plugins/select2/js/select2.min.js"




if(!window.location.pathname.includes("admin") && !window.location.pathname.includes("pharmacyadmin")) {
    require('./client/assets/css/all.css')
    require('./client/assets/css/all.min.css')
    require('./client/assets/css/fontawesome.min.css')
    require('./client/assets/css/style.css')
    require('./client/assets/js/popper.min.js')
   
}


ReactDOM.render(<AppRouter/>, document.getElementById('root'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}