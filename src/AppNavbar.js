import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
             <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">Favourites</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
            </ul>
    )
}