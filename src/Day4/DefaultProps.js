import { Component } from "react"
export default class DefaultProps extends Component{
    render(){
        return(
            <div>
                <p>Default props is {this.props.name}</p>
            </div>
        )
    }
}
DefaultProps.defaultProps={
    name:"skct"
}