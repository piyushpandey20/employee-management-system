import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-[55%] w-full py-5 mt-10'>
        {data.tasks.map((e,index) => {
            if(e.active){
                return <AcceptTask key={index} data={e}/>
            }
            if(e.newTask){
                return <NewTask key={index} data={e}/>
            }
            if(e.completed){
                return <CompleteTask key={index} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={index} data={e}/>
            }
        })}
        
    </div>
  )
}

export default TaskList
