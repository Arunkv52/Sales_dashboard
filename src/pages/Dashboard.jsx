import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-align flex justify-start items-start gap-4 max-w-full">
        <Sidebar/>
        <main className='w-full'>
          <Header/>
          <h1>Main Item place</h1>
        </main>
      </div>
    </>
  )
}

export default Dashboard