
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';

import Navbars from './Components/Navbar/Navbars';

function App() {
  return (
    <div className="App">
       
      <Banner/>
      <div className='cards'><Menu /><Menu /><Menu /><Menu /><Menu /><Menu /><Menu /><Menu /><Menu /><Menu /></div>
      <Footer/>
    </div>
    
  );
}

export default App;
