
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    
     <BrowserRouter>
    
    <Header/>
    <div  style={{display:'flex'}}  className="wrapper-all">
     <Routes>
    
            <Route  path='shopify/'  element={<Home/>} />
            <Route  path='shopify/cart'  element={<Cart/>} />
    

     </Routes>
     

    </div>
     </BrowserRouter>
    
    
   

 
  );
}

export default App;
