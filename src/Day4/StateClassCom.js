import React, {Component} from 'react'
export default class StateClassCom extends Component{
    state={
        color:"black",
        price:100
    }
    Change=()=>{
        this.setState({color:"red",price:120})
    }
       render(){
        return(
            <div>
                <h1> The color is{this.state.color}</h1>
                <h1>The price is {this.state.price}</h1>
                <button onClick={this.Change}>Click me</button>
            </div>
        )
       }
}