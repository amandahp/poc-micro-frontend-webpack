import React from 'react';


export const Dashboard = () => {

  const Dashboard = React.lazy(() => import ("DashboardApp/DashboardPage"));
  console.log(Dashboard)


  return(
    <Dashboard />
  )
}



