import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text , setText] = useState('');
  const [tmptext , setTmpTxt] = useState('');
  const [bgcolor , setBgcolor] = useState('ffffff');
  const [QR , setQR] = useState('');
  const [size , setSize] = useState(400);
  useEffect(()=>{
    setQR(`http://api.qrserver.com/v1/create-qr-code/?data=${text}!&size=${size}x${size}&bgcolor=${bgcolor}`)
  },[text , bgcolor , size]);


  const handlSubmit = (e)=>{
    e.preventDefault();
    setText(tmptext);
  }
  
  return (
    <div id="generate">
      <h1>QR generator</h1>
      <form onSubmit={handlSubmit} >
        <label htmlFor="">your text :</label> <br />
        <input type="text" onChange={(e)=>{setTmpTxt(e.target.value)}} value={tmptext} />
        <br /> <br /><br />
        <input type="color" value={bgcolor} onChange={(e)=>{setBgcolor(e.target.value.substring(1))}} />
        
        <input type="range" min={100} max={400} step={1} value={size} onChange={(e)=>{setSize(e.target.value)}} />
        <br />
        <br />
        <button type='submit'>GENERATE</button>
      </form>
      <div>
        <img id='code' src={QR} alt="code QR" />
        <a href={QR} download >Download code</a>
      </div>
    </div>
  )
}

export default App
