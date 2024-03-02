import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
   // console.log("Uppercase was clicked" + count);
    let newCount=count.toUpperCase();
    setCount(newCount)
    props.showAlert("Set to Uppercase","success")
  }
  const handleInClick =()=>{
     let newCount=count.toLowerCase();
    setCount(newCount)
    props.showAlert("Set to Lowercase","success")

  }
   const handleClearClick =()=>{
   let newCount='';
    setCount(newCount)
    props.showAlert("Clear","success")

  }
  const handleCaptClick =()=>{
    let newCount=count.split(" ").map(mi => mi.charAt(0).toUpperCase() + mi.slice(1)).join(" ");
     setCount(newCount)
    props.showAlert("Set to Capitalized","success")

   }
   const handleExtraSpaces = ()=>{
    let newCount = count.replace(/\s+/g, ' ').trim();
    setCount(newCount)
    props.showAlert("Extraspace is clear","success")

    }
    const handleCopy = ()=>{
      navigator.clipboard.writeText(count);
    props.showAlert("You have copy","success")
      
      }

    
  
  const handleOnChange =(event)=>{
    //console.log("on Change ");
    setCount(event.target.value)
  }

const [count, setCount] = useState('');
//count="new count" wrong way to write
//setCount("new count"); corect way to write
  return (<>
  <div className="container" style={{color: props.mode==='dark'?'white':'#0a2b5a'}}>
          <h1>{props.heading}</h1>

        <div className="mb-3">
        {/* <label htmlFor="My scripBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={count} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#0a2b5a' }} id="My scripBox" rows="3"></textarea>
        </div>
          <button className="btn btn-primary my-2 mx-3"  onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary my-2 mx-3"  onClick={handleInClick}> Convert to lowercase</button>
          <button className="btn btn-primary my-2 mx-3"  onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary my-2 mx-3"  onClick={handleCaptClick}>Capitalized</button>
          <button className="btn btn-primary my-2 mx-3"  onClick={handleExtraSpaces}>Extra space</button>
          <button className="btn btn-primary my-2 mx-3"  onClick={handleCopy}>Copy</button>

       </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#0a2b5a'}}> 
        <h2><b>Your text summery</b></h2>
        <p>{count.split(" ").length-1} word and {count.length} character</p>
        <p>{0.008* count.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{count.length>0?count:"Write something to preview in it"}</p>
        </div>
        </>
       
   )
}     
    
