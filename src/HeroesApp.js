import React, { useReducer } from 'react';
import AppRouter from './routes/AppRouter';
import {AuthContext} from './auth/AuthContext';
import {authReducer} from './auth/authReducer';

const HeroesApp = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged:false}
  }

  const [user,dispatch] = useReducer(authReducer,{},init)
    return (
        <AuthContext.Provider value={{user,dispatch}}>
          <AppRouter/>
        </AuthContext.Provider >
    );
}

export default HeroesApp;
