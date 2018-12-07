import React from "react";
import {connect} from "react-redux";
import * as actions from "./actions.js"
import {bindActionCreators} from "redux"

class App extends React.Component{
  constructor(props){
    super();
  }
  addNum(){
    let number = Number(this.refs.numberTxt.value);
    this.props.actions.addNum(number)
  }



  render(){
    return (
      <div>
            <h1>{this.props.v}</h1>
            <button onClick={this.props.actions.zengjia}>+</button>
            &nbsp;
            <button onClick={this.props.actions.jianshao}>-</button>
            <p>
              <input type="text" ref="numberTxt"/>
              <button onClick={(this.addNum).bind(this)}>按我增加</button>
            </p>
      </div>
    );
  }
}
export default connect(
  (state)=>{
    return {
      v:state.v
    }
  },
  (dispatch)=>{
      return {
        actions:bindActionCreators(actions,dispatch)
      }
  }

)(App);
