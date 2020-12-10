import Header from './components/header';
import SideBar from './components/sideBar';

import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <span id="header"><Header/></span>
      <span id="sidebar"><SideBar id="sidebar"/></span>
    </div>
  );
}

export default App;
