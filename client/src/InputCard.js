import { useState } from "react";
import axios from "axios";
function InputCard(){
    const [data,setdata]=useState('');
      const [btntext,setbtntsxt]=useState('Click Here');
    function senddata(){
      
       if(btntext==="Click Here"){
        axios('http://localhost:3001/geturl', {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'content-type': 'application/json',
          },
          data:{data},
        }).then((val)=>{
          setdata(val.data);
          setbtntsxt('Copy to Clipboard')
       }).catch(err=>console.log(err)); 
       }else{
         navigator.clipboard.writeText(data);
         
         setdata('');
         setbtntsxt('Click Here');
         alert("Text copied to clipboard");
       }
       
    }
   return (<div>
        
        <input type="text" id="urltext" name="url" value={data} placeholder="Enter your URL here..." autoComplete="off" onChange={e=>setdata(e.target.value)}/>
        <br/>
        <button type="submit" onClick={senddata} >{btntext}</button>

   </div>);

      
    

}

export default InputCard;