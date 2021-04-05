import React from 'react';


const Header = () => {

  const Header = React.lazy(() => import ("HeaderApp/HeaderComponent"));


  return(
    <Header />
  )
}

export default Header

