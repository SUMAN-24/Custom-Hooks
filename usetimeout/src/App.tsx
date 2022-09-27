import './App.css';
import useTimeout from './hooks/useTimeout';

function App() {
  const { ready } = useTimeout( 5000 )

  return (
    <div className="App" >
      <div style={{fontSize:"5rem",marginTop:"3rem",color:"teal",fontFamily:"cursive"}}>
        Made with help of Typescript and Custom Hooks
      </div>
      <div style={{fontSize:"2rem",marginTop:"3rem",color:"firebrick"}}>
      Wait for 5 seconds to see false changing to true.....
      </div>

      <div style={{fontSize:"3rem"}}>
        <img width="70rem" height="70rem" src="https://blog.joypixels.com/content/images/2020/09/backhand_index_pointing_down-1.gif" />
        </div>
      {ready===true? <div style={{fontSize:"3rem",fontFamily:"body",color:"green"}}>TRUE</div>:
                    <div style={{fontSize:"3rem",fontFamily:"body",color:"red"}}>FALSE</div>}
     
    </div>
  );
}

export default App;
