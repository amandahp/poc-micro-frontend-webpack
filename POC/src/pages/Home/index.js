import React from 'react';
import Header from '../../components/header/index'


export const Home = () => {

  const Home = React.lazy(() => import ("HomeApp/HomePage"));


  return(
    <>
      <Header />
      <Home />
    </>

  )
}


