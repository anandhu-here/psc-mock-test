import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkOpt } from '../../actions/check';
export class Options extends Component {
    check_opt = (label, id) =>{
        setTimeout(()=>{
            this.props.checkOpt(label, id)
        }, 500)
    }
    render() {
        const {opt, checked, checkedLabels} = this.props;
        return(
            <div key={opt.id} className="demo-test-box-options-item">
                <input type="checkbox" onChange={(e)=>this.check_opt(opt.label, opt.id)}  />
                <p>{opt.Options}</p>
            </div>
        )
        
    }
}
const mapStateToProps = state =>({
    
})
export default connect(mapStateToProps, {checkOpt})(Options)
