import React, {useState} from "react"
import './App.css';


function App() {
  const [iframeConnected, setIframeConnected] = useState(false)

  return (
    <div className="App">
      <input type="text" placeholder="Enter a link to check..." autoFocus required />
      <button onClick={ () =>setIframeConnected (!iframeConnected)}>Check!</button>
      {iframeConnected ? <div>yes!</div> :<div>no!</div> }
    
    </div>
  );
}

export default App;
