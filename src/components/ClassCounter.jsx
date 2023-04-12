import React from "react";

class ClassCouner extends React.Component{

    constructor(probs) {
        super(probs);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    increment(){
        this.setState({count: this.state.count + 1 })
    }
    decrement(){
        this.setState({count: this.state.count - 1 })
    }

    render() {
        return(
        <div>
            <h1>count: {this.state.count}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
        )
    }
}

export default ClassCouner;