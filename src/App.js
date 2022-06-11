import logo from './logo.svg';
import './App.css';
import DropdownInit from './components/DropdownInit';
import DropClick from './components/DropClick';
import DropHover from './components/DropHover';
import DropClickAni from './components/DropClickAni';


function App() {
  return (
    <>
      <header><h1>Dropdown Menus</h1></header>
      <div className="grid">
        <DropdownInit></DropdownInit>
        <DropClick></DropClick>
        <DropHover/>
        <DropClickAni/>
      </div>
    </>
  );
}

export default App;
