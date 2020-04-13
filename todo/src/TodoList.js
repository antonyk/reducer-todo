import React from 'react'

import TodoItem from './TodoItem'

function TodoList(props) {

  return (
    <div className='todo-list'>
      {props.items.map(item => <TodoItem item={item} />
      )}

    </div>
  )
}

export default TodoList;