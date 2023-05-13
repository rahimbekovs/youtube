import { useState } from 'react'
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom';
// import { Provider } from 'react';
import './App.css';
import Center from './components/Center/Center';
import { auth } from './firebase';
import Footer from './components/Foooter/Footer';
import Header from './components/Header/Header';
import LogReg from './components/LoginRegister/LoginReg';
import RegLogin from './components/LoginRegister/RegLogin';
import Provider from './components/Provider/Provider';
import SinglePage from './components/SinglePage/SinglePage';

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }

    return unsubscribe;
  }, []);
  return(
<Provider>

<BrowserRouter>
   <div className='app'>
   <Header/>
   <Routes>
    <Route element={<Center/>} path='/'/>
    <Route element={<SinglePage/>} path='video/:id'/>
    <Route element={!user ? <RegLogin/> : <Navigate to ={'/'}/>} path='/register'/>
    <Route element={!user ? <LogReg/> : <Navigate to ={'/'}/>} path='/login'/>
   </Routes>

   <Footer/>
   </div>
 
   </BrowserRouter>

</Provider>
  )
}

export default App
