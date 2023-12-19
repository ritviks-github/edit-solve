import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src="favicon.ico"/>
      {props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <div className="btn-group">
  <button type="button" className="btn btn-primary">{props.about}</button>
  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/text">Edit Text your Way</Link></li>
    <li><Link className="dropdown-item" to="/comp">Find Complement of a Number</Link></li>
    <li><Link className="dropdown-item" to="/">Prime Checker</Link></li>
  </ul>
</div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps = {
    title: "enter title here",
    about: "enter about home page here"
}