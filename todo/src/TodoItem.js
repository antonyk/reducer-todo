import React from 'react'


function TodoItem(props) {

  return (
    <div className='todo-item'>
      <label for={'todo-item-'+props.item.id}>
        <input name='todo-item' type="checkbox"
         checked={props.item.completed}
         id={'todo-item-'+props.item.id} />
        {props.item.text}
      </label>
    </div>
  )
}

export default TodoItem;