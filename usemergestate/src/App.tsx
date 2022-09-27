import {useState } from "react";
import { useMergeState } from "./hooks/useMergeState";

function App() {
    const initState = {
      username:"",
        email: "",
        password: "",
    };
    
    const { onChange, onSubmit, data } = useMergeState(initState);
      const [state, setState] = useState(initState)

const handleSubmit = ()=>{
 setState(data)
}
    return (
        <form onSubmit={onSubmit} style={{textAlign:"center"}}>
          <h1 style={{color:"teal"}}>UpdateForm</h1>
          <div style={{display:"grid", width:"400px", gap:'20px', margin :"auto"}}>
            <input
                name='username'
                id='username'
                type='text'
                placeholder='Username'
                onChange={onChange}
                required
                style={{padding:'10px'}}
                />

            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                style={{padding:'10px'}}
                />

            <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
                style={{padding:'10px'}}
                />
            <button type='submit' onClick={handleSubmit} style={{padding:'10px'}}>Login</button>
          </div>
          <div 
          style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width:"22rem",height:"10rem",
          marginTop:"3rem",textAlign:"left",
          paddingLeft:"2rem",paddingTop:"2rem",marginLeft:"31rem",
          border:"2px solid teal"
          }}>
          {`Username: ${state.username}`}
          <br/>
          {`Email: ${state.email}`}
          <br/>
          {`Password: ${state.password}`}

          </div>
        </form>
    );
}

export default App;