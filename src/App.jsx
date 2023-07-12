import { useState, useEffect } from 'react'
import Task from './componets/Task'
import Count from './componets/Count'
import Header from './componets/Header'
import { Plus } from '@phosphor-icons/react'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')


  function handleCreateTask(e) {
    e.preventDefault()



    const newTask = {
      id: tasks.length,
      content: inputValue,
      checked: false
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  function onDeleteTask(taskToDelete) {
    const updatedTasks = tasks.filter(task => task.content !== taskToDelete)
    setTasks(updatedTasks)
  }

  function onChangeChecked(taskContent, checked) {
    const updatedTasks = tasks.map(task => {
      if (task.content === taskContent) {
        return { ...task, checked: checked }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const numCheckedTasks = tasks.reduce((count, task) => {
    return task.checked ? count + 1 : count
  }, 0)

  return (
    <div className='bg-zinc-900 h-screen'>
      <Header />
      <div className='w-full max-w-[700px] mx-auto px-4'>
        <form onSubmit={handleCreateTask} className='flex items-center gap-2 -mt-6'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='w-full bg-zinc-800 rounded-sm placeholder:text-zinc-400 text-zinc-200 p-4'
            type="text"
            placeholder='Adicione uma nova tarefa'
            required
            onInvalid={(e) => (e.target.setCustomValidity('Adicione uma tarefa'))}
          />

          <button className='bg-primaryBlueDark hover:bg-secondaryPurpleDark transition-colors p-4 rounded-sm flex items-center justify-center font-medium text-zinc-200 gap-2'>
            Criar <Plus size={20} />
          </button>
        </form>
        <Count tasksLength={tasks.length} tasksChecked={numCheckedTasks} />
        <div className='w-full border-t border-zinc-600 mt-6 min-h-[300px]'>
          {tasks.length === 0 ? (
            <div className='mt-12'>
              <p className='text-zinc-500 text-center'>
                <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          ) : (
            <div className='mt-8 space-y-4'>
              {tasks.map((item) => (
                <Task
                  key={item.id}
                  content={item.content}
                  checked={item.checked}
                  onDeleteTask={onDeleteTask}
                  onChangeChecked={onChangeChecked}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App