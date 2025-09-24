import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleUncheck = this.handleUncheck.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.refresh()
  }

  refresh(description = '') {
    const searchTerm = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${searchTerm}`)
      .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }
  handleClear(){
    this.refresh()
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleCheck(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description))
  }

  handleUncheck(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description))
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleAdd() {
    // alert(this.state.description)
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp => this.refresh())
  }

  render() {
    return (
      <div>
        <PageHeader title='Tarefas' subtitle='Cadastro' />
        <TodoForm 
          description={this.state.description} 
          handleAdd={this.handleAdd} 
          handleChange={this.handleChange} 
          handleSearch={this.handleSearch} 
          handleClear={this.handleClear} 
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleCheck={this.handleCheck}
          handleUncheck={this.handleUncheck}
        />
      </div>
    )
  }
}
