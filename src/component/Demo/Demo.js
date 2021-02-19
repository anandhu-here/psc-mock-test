import React, { Component } from 'react'
import {connect} from 'react-redux';
import Intro from './Intro';
import Test from './Test';
export class Demo extends Component {
    state = {
        showDemo:false,
        checked_opt:null,

    }
    handleCheck = (e) =>{
       
    }

    render() {
        const { mcq } = this.props.MCQ;
        
        return (
            mcq.length === 0 ? <Intro /> : <Test />
        )
    }
}
const mapStateToProps = state => ({
    MCQ:state.demoReducer
})
export default connect(mapStateToProps)(Demo);
