import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';
import MainReview from './components/MainReview/MainReview';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}>
          <Route path='/' element={<Reviews/>}></Route>
        </Route>
        <Route path='/reviews' element={<MainReview/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
