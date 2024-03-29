// import logo from './logo.svg';
// import './App.css';
import './App.css';
import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { border } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/styles';
import { green } from '@mui/material/colors';
import Header from './components/Header';
import Footer from './components/footer';

import Homepage from './pages/homepage';
import NewArrivalpage from './pages/newArrivalpage';
import Productdetailspage from './pages/productdetails';
import Allitems from './pages/allItempage';
import Checkout from './pages/checkoutpage';


import { Routes, Route, Link} from "react-router-dom"
import Newarrival from './components/Newarrival';
import Navbar from './components/Navbar';
import { LocationutilityContext } from './context/Location';

// import ScrollToTop from './Utilities/ScrollToTop';

// LocationutilityContext



// import { ThemeProvider } from '@emotion/react';
// styled


const usestyle = makeStyles((theme)=>({
   button: {
     ...theme.myButton,
      '&:hover': {
         backgroundColor: '#fff',
         color: theme.palette.primary.main
     }
      
      
   }
}))


function App() {
   
const {currentLocation} = React.useContext(LocationutilityContext)

const displayfooter = currentLocation == '/collection/allitems'?false:true
  
console.log(displayfooter)
const classes = usestyle()
  
   return(
   <div> 
    {/* <Navbar/> */}
    

   <Routes>
      
      <Route exact path="/" element ={<Homepage />} />
      <Route exact path = '/newarrival' element = {<NewArrivalpage/>} />
      <Route path='/products/:productID' element = {<Productdetailspage/>}/>
      <Route exact path='/collection/:category' element = { <Allitems/>}/>
      <Route exact path='/checkout' element ={<Checkout/>}/>
   </Routes>
   {/* <div><Link to = '/newarrival' >new arr</Link></div> */}
   {/* {displayfooter && <Footer/>} */}
   </div>
   ) 
  
 
}


export default App;
