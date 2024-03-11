import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Send from './pages/Send';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path = '/signup' element = {<Signup/>}/>
      <Route path = '/signin' element = {<Signin/>}/>
      <Route path = '/dashboard' element = {<Dashboard/>}/>
      <Route path = '/send' element = {<Send/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
