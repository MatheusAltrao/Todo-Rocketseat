import React from 'react'

const Count = ({ tasksLength, tasksChecked }) => {
  return (
    <div className='mt-16 flex items-center justify-between ' >


      <div className='flex items-center  gap-2' >

        <p className='text-primaryBlueLight font-medium' > Tarefas criadas </p>
        <span className='text-zinc-200 flex items-center justify-center bg-zinc-700  rounded-full px-1 font-medium' > {tasksLength} </span>

      </div>

      <div className='flex items-center  gap-2' >

        <p className='text-secondaryPurpleLight  font-medium'  > Concluídas</p>
        <span className='text-zinc-200 flex items-center justify-center bg-zinc-700  rounded-full px-1 font-medium ' >{tasksChecked == 0 ? 0 : `${tasksChecked} de ${tasksLength}`}</span>

      </div>


    </div>
  )
}

export default Count
