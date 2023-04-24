import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{basket},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[basket])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<> <Header/><Checkout/></>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<><Header/><Home/></>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
