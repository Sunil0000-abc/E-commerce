import './App.css'
import Navbar from './components/navbar/navbar';
import './tailwind.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Shop from './pages/Shop'
import Shopcatagory from './pages/Shopcatagory';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/product';
import Cart from './pages/Cart'
import Footer from './components/footer/footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids from './components/assets/banner_kids.png'





function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<Shopcatagory banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<Shopcatagory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<Shopcatagory banner={kids} category="kid"/>}/>
            <Route path='/LoginSignup' element={<LoginSignup/>}/>
            <Route path='/product' element={<Product/>}>
               <Route path=':productId' element={<Product/>}/>
            </Route>
           <Route path='/Cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
