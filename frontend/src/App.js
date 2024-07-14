import React from 'react';
import Header from './components/header';
import './App.css'
import Footer from './components/footer';
import Movies from './containers/Movie';
import AddMovies from './components/AddMovies';
const 
App = () => {
  return ( 
    <React.Fragment>
    <Header/>
    <Movies/>
    <AddMovies/>
    <Footer/>
    </React.Fragment>



   );
}
 
export default 
App;
