import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    //checks if where the nav bar takes you is equal to where you end up
    var isActive = props.location.pathname === props.to;
    // variable ternary statement
    var className = isActive ? 'active' : '';

        // set class name active to link tag if classname is true
        return(
            <Link className={`${className} navbar__link`} {...props}>
                {props.children}
            </Link>
        );
}