import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDemotest } from '../../actions/demo';
import Loader from '../Layout/Loader';

export class Intro extends Component {
    demoTest = (e) =>{
        this.props.getDemotest();
    }
    render() {
        const { isLoading } = this.props.MCQ;

        return (
            isLoading === true ? <Loader /> : <div className="demo-intro">
            <div className="demo-intro-text">
            Welcome to mocktest,<br></br> Select an exam from below and get into our 30 minutes free mock tests !
            </div>
            <div className="demo-intro-body">
            <input  
                value="Psc"
                name="PSC"
                type="submit"
                className="demo-intro-body-btn"
                onClick={(e)=>this.demoTest(e)}
            />
            <input  
                value="GATE"
                name="GATE"
                type="submit"
                className="demo-intro-body-btn"
                onClick={(e)=>this.demoTest(e)}
            />
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => ({
    MCQ:state.demoReducer
})
export default connect(mapStateToProps, {getDemotest})(Intro);
