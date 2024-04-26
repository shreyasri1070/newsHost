
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';

import  News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,

  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// const router = createBrowserRouter([
//   {
//     exact path= "/general",
//     element={ <News  pagesize={6} country='in' category="general"/>,
//     key="general",
//   },
//   {
//     exact path= "/sports",
//     element={ <News  pagesize={6} country='in' category="sports"/>,
//     key="sports",
//   },
//   {
//     exact path= "/",
//     element={ <News  pagesize={6} country='in' category="general"/>,
//     key="home",
//   },
//   {
//     exact path= "/entertainment",
//     element={ <News  pagesize={6} country='in' category="entertainment"/>,
//     key="entertainment"
//   },
//   {
//     exact path= "/health",
//     element={<News  pagesize={6} country='in' category="health"/>,
//     key="health"
//   },
//   {
//     exact path= "/science",
//     element={<News  pagesize={6} country='in' category="science"/>,
//     key="science"
//   },
//   {
//     exact path= "/technology",
//     element={<News  pagesize={6} country='in' category="technology"/>,
//     key="technology"
//   },
//   {
//     exact path= "/business",
//     element={<News  pagesize={6} country='in' category="business"/>,
//     key="bussiness"
//   },

// ]);
 const  App=()=> {
 const apikey=process.env.REACT_APP_API_KEY;

  
  const [progress,setProgress]=useState(0);
  
  
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      
      />
       
       <Routes> 
      <Route   exact path="/general" element={<News setProgress= {setProgress} apikey={apikey} key="general" pagesize={6} country='in' category="general"/>}  >
     </Route>
     <Route  exact path= "/sports" element={ <News setProgress= {setProgress} apikey={apikey} key="sports" pagesize={6} country='in' category="sports"/>}>
     </Route>
     <Route  exact path="/health" element={<News setProgress= {setProgress} apikey={apikey}  key="health" pagesize={6} country='in' category="health"/>} >
     </Route>
     <Route exact path="/entertainment" element={<News setProgress= {setProgress} apikey={apikey} key="entertainment" pagesize={6} country='in' category="entertainment"/>} >
     </Route>
     <Route    exact path="/science" element={<News setProgress= {setProgress} apikey={apikey}  key="science" pagesize={6} country='in' category="science"/>} >
     </Route>
     <Route exact path="/" element={<News setProgress= {setProgress} apikey={apikey}   key="home" pagesize={6} country='in' category="general"/>}  >
     </Route>
     <Route    exact path="/technology" element={<News setProgress= {setProgress} apikey={apikey} key="technology" pagesize={6} country='in' category="technology"/>}>
     </Route>
     <Route exact path="/business" element={<News setProgress= {setProgress} apikey={apikey}  key="business" pagesize={6} country='in' category="business"/>}  >
     </Route>
       </Routes>
       </BrowserRouter>
      </div>
    )
  
}
export default App;



