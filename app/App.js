import React from 'react';
import { connect } from 'dva';
//import styles from './IndexPage.css';

class App extends React.Component{
    constructor(props){

    }
    render(){
        return <div>
            <h1>我是App组件 {this.props.v}</h1>
            <button onClick = {()=> {this.props.dispatch({"type": "counter/add", "payload":{"number": 1}})}}>加1</button>
            <button onClick = {()=> {this.props.dispatch({"type": "counter/minus", "payload": {"number": 2}})}}>减2</button>
            <button onClick = {()=> {this.props.dispatch({"type": "counter/add", "payload":{"number": 2}})}}>加2</button>
        </div>
    }
}


export default connect(({counter})=>({
    "v": counter.v
}))(App);