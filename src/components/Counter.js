import React from "react";

export class Counter extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            count: 0,
            multiplier: 1,
        }
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + prevState.multiplier
        }));
    }

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - prevState.multiplier
        }));
    }
    reset = () => {
        this.setState({count: 0});
    }

    changeMultiplier = (value) => {
        this.setState({multiplier: value});
    }

    render() {
        return (

            <div className="container">
                <div className="counter">{this.state.count}</div>

                <div className="button-wrapper">
                    <button onClick={this.decrement} className="button">Decrement</button>
                    <button onClick={this.reset} className="button">Reset</button>
                    <button onClick={this.increment} className="button">Increment</button>
                </div>
                <div className="dropdown">
                    <select onChange={(e) => this.changeMultiplier(+e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
        )
    }
}