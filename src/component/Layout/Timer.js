import React, { Component } from 'react'
import { connect } from 'react-redux';
import { timer_end } from '../../actions/Timer';

export class Clock extends Component {
    state ={
        clockSec:20,
        clockMin:29,
        status:false
    }
    clockStop = () =>{
        clearInterval(this.timer);
        this.props.timer_end();
    }
    startClock = () =>{
        this.timer = setInterval(()=>{
            const {clockSec, clockMin} = this.state;
            
            if(clockSec === 0){
                if(clockMin === 0){
                    this.clockStop();
                }
                else{
                    this.setState({clockSec:60,clockMin:clockMin-1 })
                }
            }
            else{
                this.setState({clockSec:clockSec < 10? "0" + this.state.clockSec-1:this.state.clockSec-1});
            }
        }, 1000)
        
        
    }
    componentDidMount(){
        this.startClock()
    }
    render() {

        return (
            <div className="clock">
                {this.state.clockMin} : {this.state.clockSec}  
            </div>
        )
    }
}
const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{timer_end})(Clock);
