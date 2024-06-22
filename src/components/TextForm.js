import React,{useState} from 'react'

export default function TextForm(props) {

  const [text,setText] = useState("");

  const handleupclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted To Upper Case","success : ");
  }
  const handleloclick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted To Lower Case","success : ");
  }
  const clear = ()=>{
    let newText = '';
    setText(newText);
    props.showalert("Text Area Is Cleared","success : ");
  }

  const handlechange = (event)=>{
    setText(event.target.value)
  }

  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied To Clipboard","success : ");
    document.getSelection().removeAllRanges();
  }

  // const [name , setName] = useState("Enable Dark Mode");

  // const [style , setStyle] = useState({
  //   color:"black",
  // })

  // const toggle = ()=>{
  //   if(style.color === "black"){
  //     setStyle({
  //       color:"white",
  //       backgroundColor:"black",
  //     })
  //     setName("Enable Light Mode")
  //   }
  //   else{
  //     setStyle({
  //       color:"black",
  //       backgroundColor:"white",

  //     })
  //     setName("Enable Dark Mode");
  //   }
  // }

  return (
    <>
    <div >
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='my-3' >{props.heading}</h1>
        <textarea className="form-control" id="mybox" value={text} onChange={handlechange}  rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}/>
      </div>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleupclick} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={handleloclick} >Convert to LowerCase</button>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={clear} >clear</button>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={copy} >Copy</button>
      {/* <div className="btn btn-primary mx-3 my-3" onClick={toggle} >{name}</div> */}
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.008} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}