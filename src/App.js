import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


// let name = "Bishal";
function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or disabled
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils-Dark Mode'
      
      // setInterval(() => {
      //   document.title = "Textutils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = " Install Textutils"
      // }, 1000);

      
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")
    document.title = 'TextUtils-Light Mode'


    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000);
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

    <Router>
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
   {/* <Navbar /> */}
   <Alert alert={alert} />
   <div className='container my-3' >
        <Routes>
          {/* if we use exact then it will search for exact route  */}
          {/* /users  --> component 1 it will render component 1 */}
          {/* /users/home  --> component 2 it will render component of users if we didnot use exact  */}
          {/* <Route  exact path={'/'} element={ <Textform heading="Enter the text to analyze"  mode={mode} showAlert={showAlert} />} /> */}

          <Route  path={'/'} element={ <Textform heading="Try TextUtils"  mode={mode} showAlert={showAlert} />} />
          
          <Route path={'/about'} element={<About mode={mode} />} />
        </Routes>
   </div>
    </Router>
   </>
  );
}

export default App;
