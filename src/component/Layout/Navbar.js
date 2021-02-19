import React, { Component } from 'react';
import { FaBars, FaBeer, FaBell, FaComment, FaSistrix } from 'react-icons/fa';
import { connect } from 'react-redux';
import Clock from './Timer';

export class Navbar extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div className="navbar" >
                <a href="/" className="navbar-left">MockTest</a>
                <div className="navbar-right">
                    <a href="/" className="navbar-right-item">About Us</a>
                    <a href="/" className="navbar-right-item">Updates</a>
                    
                </div> 
            </div>
        )
    }
}


export default Navbar;
