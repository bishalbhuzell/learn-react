import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


// let name = "Bishal";
function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or disabled
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else
    setMode('light');
    document.body.style.backgroundColor = 'white';

  }

  return (
   <>
   {/* <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
   </nav>

   <div className="container">
    <h1>This is {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, totam saepe incidunt alias molestiae quia nostrum earum modi, aspernatur ab consequuntur qui nulla repellendus praesentium architecto inventore quasi cum eius excepturi. Corporis, aliquid non!</p>
   </div> */}

   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
   {/* <Navbar /> */}
   <div className='container my-3' >
    <Textform heading="Enter the text to analyze" />
   </div>
   <About />
   </>
  );
}

export default App;
