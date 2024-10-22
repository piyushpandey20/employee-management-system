import React from 'react'
import Header from '../common/Header'
import TaskListNumbers from '../common/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDash = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white'>
        <Header data={props.data} changeUser={props.changeUser}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDash
