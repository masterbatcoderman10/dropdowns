import logo from './logo.svg';
import './App.css';
import DropdownInit from './components/DropdownInit';
import DropClick from './components/DropClick';
import DropHover from './components/DropHover';
import DropClickAni from './components/DropClickAni';
import DropClickAniTwo from './components/DropClickAniTwo';
import DropAbsolute from './components/DropAbsolute';
import DropButtonAnimation from './components/DropButtonAnimation';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';


function App() {
  return (

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/navbar" element={<Navbar/>}></Route>   
    </Routes>
  );
}

function Home() {
  return (
    <>
    <header><h1>Dropdown Menus</h1></header>
      <div className="grid">
        <DropdownInit></DropdownInit>
        <DropClick></DropClick>
        <DropAbsolute/>
        <DropClickAni/>
        <DropClickAniTwo/>
        <DropHover/>
        <DropButtonAnimation/>

      </div>
      </>
  )
}

export default App;
