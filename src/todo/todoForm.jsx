import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import Grid from '../template/Grid'
import IconBtn from '../template/IconBtn'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount(){
    this.props.search()
  }

  keyHandler(e) {
    const {add, search, description,clear} = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search(description) : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const {add, search, description} = this.props
    return (
      <div className='todoForm row mb-3' role='form'>

        <Grid cols='12 9 10'>
          <input id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={this.props.changeDescription} onKeyUp={this.keyHandler} value={this.props.description}></input>
        </Grid>
        <Grid cols='12 3 2'>
          <IconBtn style='primary' icon='plus' onClick={() => add(description)} />
          <IconBtn style='info' icon='search' onClick={() => search(description)} />
          <IconBtn style='default' icon='close' onClick={this.props.clear} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)