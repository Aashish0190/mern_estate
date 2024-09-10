import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigIn from './pages/SigIn';
import Signup from './pages/Signup';

import About from './pages/About';
import Profile from './pages/Profile';


export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/'  element = {<Home/>}/>
    <Route path='/sign-in'  element = {<SigIn/>}/>
    <Route path='/sign-up'  element = {<Signup/>}/>
    <Route path='/about'  element = {<About/>}/>
    <Route path='/profile'  element = {<Profile/>}/>

  </Routes>
  </BrowserRouter>
}
