import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import TestPagination from './TestPagination';
import Begin from './Begin';
import { timer_init } from '../../actions/Timer';

export class Test extends Component {
    
    state = {
        tab:1
    }
    changeTab = (tab) =>{
        this.setState({
            tab:tab
        })
        
    }
    render() {
        const { mcq } = this.props.MCQ;
        switch (this.state.tab) {
            case 1:
                return <Begin changeTab = {this.changeTab} />
                break;
            case 2:
                return <TestPagination  />
                break;
            default:
                return <Begin changeTab = {this.changeTab}/>
                
                break;
        }
    }
}
const mapStateToProps = state => ({
    MCQ:state.demoReducer
})
export default connect(mapStateToProps, {timer_init})(Test);
