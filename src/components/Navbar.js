import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <button onClick={props.toggleMode} className="btn btn-outline my-2 my-sm-0" type="submit">Enable {props.mode === `light` ? `dark` : `light`} mode</button>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here",
    abouttext: "About"
}