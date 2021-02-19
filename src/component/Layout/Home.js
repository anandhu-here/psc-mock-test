import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../Auth/Auth';
import Demo from '../Demo/Demo';
import Results from '../Results/Results';

export class Home extends Component {
    render() {
        const {timer} = this.props;
        return (
            <div className="home" >
                <div className="home-left">
                    <Auth />
                </div>
                <div className="home-right">
                    {timer.Timer === "stop"?<Results />:<Demo />}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    timer:state.timerReducer
})

export default connect(mapStateToProps)(Home);
