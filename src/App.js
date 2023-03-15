import './App.css';
import Toggle from './components/toggle/toggle';
import image from '../src/images/outside.jpg'
import { useState } from 'react';
function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? 'dark-theme' : 'light-theme';
  return (
    <div className={`App ${theme}`}>
      <Toggle isDark={isDark} setIsDark={setIsDark} />
      {/* <div className='card'>
  <img src={image}/> 
  <div className='cardDetails'>
    <h2>Title</h2></div> 
</div> */}

      <nav className='sideNav'>
        <div className='logo'></div>
        <div className='linksWrapper'>

          <div className='linkContainer'>
            <a>Home</a>
            <span>Home</span>
          </div>
          <div className='linkContainer'>
            <a>Reports</a>
            <span>Reports</span>
          </div>
          <div className='linkContainer'>
            <a>Dashboard</a>
            <span>Dashboard</span>
          </div>
          <div className='linkContainer'>
            <a>About Emile</a>
            <span>AboutEmile</span>
          </div>
          <div className='linkContainer'>
            <a>Settings</a>
            <span>Settings</span>
          </div>


        </div>
        <div className='linksBottomWrapper'>


          <div className='linkContainer'>
            <a>Logout</a>
            <span>Logout</span>
          </div>


        </div>
      </nav>
    </div>
  );
}

export default App;
