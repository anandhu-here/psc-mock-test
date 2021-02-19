import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Options from './Options';
import Clock from '../Layout/Timer';
import { clear_state } from '../../actions/clear';
import { finalSubmission } from '../../actions/demo';
import { timer_end } from '../../actions/Timer';
export class TestPagination extends Component {
    constructor(props){
        super(props)
        this.state = {
            showOpt:null,
            ItemCount:6,
            ItemStart:0,
            currentPage:1,
            pageOffset:0,
        }
    }
    ToggleOpt = (e, label) =>{
        e.preventDefault();
        if(label !== this.state.Qclosed){
            this.setState({
                showOpt:this.state.showOpt === label ? null : label
            })
        }
    }
    Previous = (e, l) =>{
        e.preventDefault();
        const { ItemStart, ItemCount,  } = this.state;
        if(ItemStart > 0){
            this.setState({ItemStart:ItemStart-ItemCount});
        }
    }
    Next = (e, l) =>{
        e.preventDefault();
        const { ItemStart, ItemCount, mcq } = this.state;
        if (l === ItemCount){
            this.setState({ItemStart:ItemStart+ItemCount})
        }
        
    }
    ChangePage = (e, c) =>{
        e.preventDefault();
        const { ItemStart, ItemCount,pageOffset  } = this.state;
        this.setState({ItemStart:pageOffset+((c-1)*ItemCount)});
    }
    Submit = (e) =>{
        e.preventDefault();
        this.props.timer_end();
    }

    render() {
        let {mcq} = this.props.MCQ;
        const { showOpt, ItemCount,checkedLabels } = this.state;
        var pages = Array.from({length:Math.ceil(mcq.length/ItemCount)}, (_, index)=>index+1);
        let questions = mcq.map(item=>(
            <div key={item.label}  className={"demo-test-box" + " " + (item.checked === true?"checked":null)}>
                <div onClick={(e)=>this.ToggleOpt(e,item.label)} className="demo-test-box-question"  >
                    <p>{item.label} )</p>
                    <h3>{item.question}</h3>
                </div>
                {!item.checked?<div className="demo-test-box-options">
                    {item.options.map(op=>{
                        if(op.label === showOpt){
                            return(
                                <Options key={op.id} checked={this.Checked} opt={op} checkedLabels={checkedLabels} />
                            )
                        }
                        else{
                            return null
                        }
                    })}
                </div>:null}
            </div>  
        ))
        let final_list = [questions.splice(this.state.ItemStart, this.state.ItemCount)];
        return (
            <div className="demo">
                <Clock />
                <div className="demo-test">
                    {final_list}
            
                </div>

                <div className="pages">
                    <button onClick={(e)=>this.Previous(e)} className="pages-prev">Prev</button>
                    {pages.map(c=>(
                        <button key={c} onClick={(e)=>this.ChangePage(e, c)}  className="pages-btn">{c}</button>
                    ))}
                    <button onClick={(e)=>this.Next(e, final_list[0].length)} className="pages-next">Next</button>
                    <button onClick={(e)=>this.Submit(e)} >Submit</button>
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    MCQ:state.demoReducer
})
export default connect(mapStateToProps, {clear_state, timer_end })(TestPagination);
