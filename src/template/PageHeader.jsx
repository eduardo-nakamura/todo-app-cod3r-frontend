import React from 'react'


export default function PageHeader(props) {
  return (
    <header className="page-header mt-3 mb-3">
        <h2>{props.title} <small>{props.subtitle}</small></h2>
    </header>
  )
}
