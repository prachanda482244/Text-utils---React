import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className
      ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className
        ="container-fluid">
        {/* <Link className
          ="navbar-brand" to="/">{props.title}</Link> */}

        <a className
          ="navbar-brand" href="#">{props.title} - Itachi</a>
        <button className
          ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className
            ="navbar-toggler-icon"></span>
        </button>
        <div className
          ="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}

          </ul>
          <form className="d-flex" role="search">
            <input className
              ="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className
              ="btn btn-outline-primary" type="submit">Search</button>
          </form>

          <div className="colorPallete mx-2">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Color palette
            </button>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Color Palette</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {/*
                  <input className="form-check-input bg-primary p-2 mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.toggleMode} checked />

                  <input className="form-check-input bg-secondary p-2 mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />

                  <input className="form-check-input bg-success p-2 mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />

                  <input className="form-check-input bg-warning p-2 mx-2 " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />

                  <input className="form-check-input bg-info p-2 mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked /> */}


                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`form-check  mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};


Navbar.defaultProps = {
  title: "Default title",
  aboutText: "About"
};