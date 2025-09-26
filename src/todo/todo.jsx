import React from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default props => (
  <div>
        <PageHeader title='Tarefas' subtitle='Cadastro' />
        <TodoForm />
        <TodoList />
      </div>
)
