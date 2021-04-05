import React from 'react';
import Header from '../../components/header/index';


export const Login = () => {

  const Login = React.lazy(() => import ("LoginApp/LoginPage"));


  return(
    <>
      <Header />
      <Login />
    </>

  )
}
