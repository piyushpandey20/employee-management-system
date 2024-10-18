import React from 'react'
import Header from '../common/Header'
import TaskListNumbers from '../common/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDash = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white'>
        <Header/>
        <TaskListNumbers/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDash
