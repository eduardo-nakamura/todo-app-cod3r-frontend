import React from 'react'

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#/todos" className="nav-link">
                                Tarefas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#/about" className="nav-link">
                                Sobre
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
