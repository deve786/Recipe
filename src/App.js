
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Food from './Pages/Food/Food';
import Navbars from './Components/Navbar/Navbars';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/food/:id' element={<Food/>}></Route>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
