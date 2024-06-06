
import './App.css';
import { useState } from 'react';

function App() {

  const [name,setName]=useState('Enter Your Name');
  const [fullname,setFullName]=useState();
  const onchange=(e)=>{
    setName(e.target.value)
  }
   
  
  const onSubmits=(event)=>{
    event.preventDefault();
    setFullName(name);
  }

  return (
    
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
    <div className="card" style={{width: "18rem"}}>
 
  <div className="card-body text-center my-2">
    <h5 className="card-title my-2">Hello {fullname}</h5>
    <form onSubmit={onSubmits}>
    <input className="card-text my-2" type="text" value={name} onChange={onchange}/>
     <button className="btn btn-primary" type="submit">Set Name👍</button> 
     </form>
  </div>
  </div>
  </div>

    
  );
}

export default App;
