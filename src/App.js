// import "./App.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from 'react';
import Login from "./components/Login/Login";
import Blog from './components/Blog';
import { LoginContext } from './Contexts/LoginContext';
function App() {
  const [showProfile,setShowProfile]=useState(false);
  const [username,setUsername]=useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{username,setUsername,setShowProfile}}>
         {/* {showProfile ? <Blog/> : <Login/>} */}
         <Router>
        <Routes>
          {/* <Route path="/" element={<Login/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        
      </Router>
      </LoginContext.Provider>
     
    </div>
  );
}

export default App;
