import logo from './logo.svg';
import './App.css';
import DropdownInit from './components/DropdownInit';
import DropClick from './components/DropClick';
import DropHover from './components/DropHover';


function App() {
  return (
    <>
      <header><h1>Dropdown Menus</h1></header>
      <div className="grid">
        <DropdownInit></DropdownInit>
        <DropClick></DropClick>
        <DropHover/>
      </div>
    </>
  );
}

export default App;
