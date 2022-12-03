import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}>
          <Route path='/' element={<Reviews/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
