import logo from './logo.svg';
import './App.css';
import Header from './Header';
import axios from 'axios';
import { API_BASE_URL } from './constants';

function App() {
  function handleClick(device){
    axios.get(API_BASE_URL+"/house/"+device+"/toggle")
  }
  return (
    <div className="App">
      <Header/>
      <div className='container'>
          <button className='switch-buttons' onClick={()=>{handleClick("light")}}>
            <div className="button-contents">
              <i class="fa-regular fa-lightbulb"></i>
              <span>
                Bulb
              </span>
            </div>
            
        </button>
        <button className='switch-buttons' onClick={()=>{handleClick("fan")}}>
            
            <div className="button-contents">
              <i class='fas fa-fan'></i>
              <span>
                Fan
              </span>
            </div>
        </button>
      <button className='switch-buttons' onClick={()=>{handleClick("socket")}}>
        <div className="button-contents">
                      <i class='fas fa-plug'></i>
                    <span>
                      Socket
                    </span>
        </div>
      </button>
      <button className='switch-buttons' onClick={()=>{handleClick("ac")}}>
        <div className="button-contents">
                      <i class='fas fa-plug'></i>
                    <span>
                      AC
                    </span>
        </div>
            
      </button>
      </div>
    </div>
  );
}

export default App;
