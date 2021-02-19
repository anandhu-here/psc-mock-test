import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Begin extends Component {
    render() {
        return (
            <div className="begin" >
                <h3>Your PSC Test is ready.</h3>
                <p>Time : 30 Minutes <br></br> You will recieve a complete time based and answer based evaluaiton after ther final submission <br></br> </p>
                <button className="begin-btn" onClick={()=>this.props.changeTab(2)} >Start</button>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    MCQ:state.demoReducer
})

export default connect(mapStateToProps)(Begin); 
