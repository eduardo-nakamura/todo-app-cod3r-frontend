import React from 'react'
import IconBtn from '../template/IconBtn'
import './template.css'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone,markAsPending, remove } from './todoActions'

const TodoList = props => {
  
  function converterData(dataString){
    const dataTarefa = new Date(dataString)
    const dataFormatada = dataTarefa.toLocaleDateString('pt-BR'); 
    return dataFormatada
  }

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td>
          <p className={todo.done ? 'text-dark text-decoration-line-through' : ''}>{todo.description}</p>
        </td>
        <td>
          <p >{converterData(todo.createdAt)}</p>
        </td>
        <td>
          <IconBtn style={!todo.done ? 'success' : 'light'} icon='check' onClick={() => props.markAsDone(todo)} hide={todo.done} />
          <IconBtn style={todo.done ? 'warning' : 'light'} icon='undo' onClick={() => props.markAsPending(todo)} hide={!todo.done} />
          <IconBtn style={todo.done ? 'danger' : 'light'} icon='trash-o' onClick={() => props.remove(todo)} hide={!todo.done} />
        </td>
      </tr>
    ))
  }

  return (
    <div className="container">
      <div className="flex-table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Criado em:</th>
              <th className='tableActions'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    </div>

  )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone,markAsPending, remove }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)