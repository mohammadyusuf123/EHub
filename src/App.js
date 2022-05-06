
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Inventories from './Components/Inventories/Inventories';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Order from './Components/Order/Order';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/inventories' element={<Inventories></Inventories>}></Route>
       <Route path='/inventories/:inventoriesId' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}></Route>
       <Route path='/blog' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;