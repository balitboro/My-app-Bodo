import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import  {
//   BrowserRouter, Switch,
//   Route,
 
 
  
//  } from "react-router-dom";


function App() {
  const [ mode, setMode] = useState ('light'); // weather darkmode is Enable or not
  const [ alert, setAlert] = useState ('null');
  const showAlert= (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    },3000);
    }
  
  const togleMode= () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0a2b5a';
      showAlert("Darkmode is enable", "success");
      document.title ='Bodo - Darkmode';
      // setInterval  (() =>{
      // document.title ='Bodo is hack';
      // },2000);
      // setInterval  (() =>{
      //   document.title ='WARNING';
      //   },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode is enable", "success");
      document.title ='Bodo - Lightmode';

    }
  }
  return (
   <>
 {/* <Navbar title = "BODO" aboutme="About Bodo"/> */}
 {/* <Navbar/> */}
        {/* <BrowserRouter> */}
        <Navbar title = "BODO" mode={mode} togleMode={togleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Switch> */}
          
            {/* <Route path="/about"> */}
             {/* <About /> */}
            {/* </Route> */}
            {/* <Route path="/"> */}
              <TextForm showAlert={showAlert} mode={mode} heading="Write your Knowledge"/>
             {/* </Route> */}
             
        {/* </Switch> */}
          {/* <About/> */}

          </div>
          {/* </BrowserRouter> */}
          
        

   </>
  );
}

export default App;

