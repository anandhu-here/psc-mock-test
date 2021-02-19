import React, { Component } from 'react'
import Login from './Login';
import Register from './Register';

export class Auth extends Component {
    state = {
        tab:2
    }
    changeTab = (tab) =>{
        this.setState({
            tab:tab
        })
    }
    render() {
        var AuthComp;
        const {tab} = this.state;
        switch (tab) {
            case 1:
                AuthComp = (<Login />)
                break;
            case 2:
                AuthComp = (<Register />)
                break;
            default:
                AuthComp = (<Register/>)
                break;
        }
        return (
            <div className="auth">
                <div className="auth-tab">
                    <div onClick={()=>this.changeTab(1)} className={(this.state.tab === 1?"auth-tab-registerUnder":"auth-tab-register")}>Register</div>
                    <div onClick={()=>this.changeTab(2)} className={(this.state.tab === 2?"auth-tab-registerUnder":"auth-tab-register")}>Login</div>
                </div>
                {AuthComp}
            </div>
        )
    }
}

export default Auth
