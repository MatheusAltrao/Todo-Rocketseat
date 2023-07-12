import { TrashSimple } from '@phosphor-icons/react'
import React from 'react'
import { useState } from 'react'


const Task = ({ content, onDeleteTask, onChangeChecked, checked }) => {


  function deleteTask() {
    onDeleteTask(content)
  }

  function handleCheckboxChange(e) {
    onChangeChecked(content, e.target.checked)
  }



  return (
    <div className={`w-full text-zinc-200 flex items-start justify-start gap-3
    bg-zinc-800 rounded-sm p-4 relative ${checked && 'opacity-70'} `} >

      <div>
        <input checked={checked} onChange={handleCheckboxChange} type="checkbox" />
      </div>

      <div className='flex-1 overflow-hidden' >
        <p className={`${checked ? 'line-through' : 'line-clamp-none'} text-sm`} >{content}</p>
      </div>

      <button onClick={deleteTask} className=' hover:text-error transition-colors flex items-center justify-center pt-1 text-zinc-500 ' > <TrashSimple size={20} /> </button>


    </div>
  )
}

export default Task
