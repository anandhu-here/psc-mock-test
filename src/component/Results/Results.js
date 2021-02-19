import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Results extends Component {
    render() {
        const {result} = this.props;
        console.log(result.mcq);
        let corect_ans = [];
        let attended = [];
        let total_Q = result.mcq.length;
        result.mcq.map(item=>{
            item.options.map(opt=>{
                if(opt.is_checked){
                    attended.push(opt)
                    if(opt.is_checked && opt.is_correct){
                        
                        corect_ans.push(opt)
                    }
                }
            })
        })
        return (
            <div>
                <p>Total Quesations: {total_Q} <br></br>Questions attened : {attended.length}<br></br>Scored questions : {corect_ans.length}</p>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    result:state.demoReducer
})
export default connect(mapStateToProps)(Results);
