import React from 'react'
import tick from '../assets/icons8-tick-64.png'
import not_tick from '../assets/delete.png'
import n_tick from '../assets/icons8-white-circle-48.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2' >
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : n_tick } alt="Tick Icon" className='w-7' />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? 'line-through' : ''}`}>{text}</p>
        </div>

        <img src={not_tick} alt="Delete Icon" className='w-3.5 cursor-pointer mr-2.5' onClick={() => deleteTodo(id)} />
    </div>
  )
}

export default TodoItems