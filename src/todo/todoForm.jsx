import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import Grid from '../template/Grid'
import IconBtn from '../template/IconBtn'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount(){
    this.props.search()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    return (
      <div className='todoForm row mb-3' role='form'>

        <Grid cols='12 9 10'>
          <input
            type="text"
            id='description'
            placeholder='Adicione uma tarefa'
            className="form-control"
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler} />
        </Grid>
        <Grid cols='12 3 2'>
          <IconBtn style='primary' icon='plus' onClick={this.props.handleAdd} />
          <IconBtn style='info' icon='search' onClick={this.props.handleSearch} />
          <IconBtn style='default' icon='close' onClick={this.props.handleClear} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)