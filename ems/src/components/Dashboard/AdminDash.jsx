import React from 'react'
import Header from '../common/Header'
import CreateTask from '../common/CreateTask'
import AllTask from '../common/AllTask'

const AdminDash = (props) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDash
