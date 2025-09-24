import React from 'react'
import PageHeader from '../template/PageHeader'
import Grid from '../template/Grid'
import IconBtn from '../template/IconBtn'

export default function TodoForm(props) {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
      alert('Enter')
    } else if (e.key === 'Escape') {
      props.handleClear()
      alert('Esc')
    }
  }

  return (
    <div className='todoForm row mb-3' role='form'>

      <Grid cols='12 9 10'>
        <input 
          type="text" 
          id='description' 
          placeholder='Adicione uma tarefa' 
          className="form-control" 
          value={props.description} 
          onChange={props.handleChange}
          onKeyUp={keyHandler} />
      </Grid>
      <Grid cols='12 3 2'>
        <IconBtn style='primary' icon='plus' onClick={props.handleAdd} />
        <IconBtn style='info' icon='search' onClick={props.handleSearch} />
        <IconBtn style='default' icon='close' onClick={props.handleClear} />
      </Grid>
    </div>
  )
}
