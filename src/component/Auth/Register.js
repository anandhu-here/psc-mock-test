import React, { Component } from 'react'

export class Register extends Component {
    state = {
        email:"",
        pass1:"",
        pass2:""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    Register = () =>{
        
    }
    render() {
        return (
            <div className="register" >
                <div className="register-logo">MockTest</div>
                <div className="register-div">
                    <input 
                        className="register-div-email" 
                        value={this.state.email}
                        name="email" 
                        onChange={this.handleChange}
                        type="email"
                        placeholder="email"
                        />
                    <input 
                        className="register-div-email" 
                        value={this.state.pass1}
                        name="pass1"
                        type="password" 
                        onChange={this.handleChange}
                        placeholder = "password1"
                        />
                    <input 
                        className="register-div-email" 
                        value={this.state.pass2}
                        name="pass2" 
                        type="password"
                        placeholder = "password2"
                        onChange={this.handleChange}
                    />
                    <input 
                        className="register-div-submit" 
                        type="submit"
                        value="Register"
                        onClick = {()=>this.Register()}
                        />
                </div>

            </div>
        )
    }
}

export default Register
