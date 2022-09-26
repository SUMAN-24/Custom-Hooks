import { ChangeEvent, useState } from 'react';
import './App.css';

import axios from "axios";
import { useFetch } from './hooks/useFetch';



 type User={
    id: number;
    login: string;
    avatar_url: string;
};

function App() {
  const [text, setText] =useState<string>("")
  const url="https://api.github.com/search/users";
  const { loading, data, error} =useFetch<User>(url, {
      per_page: 10,
      q: text || "masai",
    });
// console.log(data);

const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
  setText(e.target.value)
}

  return (
    <div className="App">
       <input type="text" value={text} onChange={onChange} />
        <button onClick={()=>{
          axios.get(url,{
          params:{
            per_page:10,
            q: text,
          } ,
          }
          );
        }}>
          Search
        </button>
        
         { loading ? (<div>Loading....</div>): error ? (<div>something went wrong</div>) : ( 
              
              data.map((user)=>{
                return (
                <div key={user.id} >
                  {user.login}
                  <div>
                    <img src={user.avatar_url} alt="images" height={250} width={250} />
                  </div>
                </div>
              );
              }
       ) )}
    </div>
  );
}

export default App;
