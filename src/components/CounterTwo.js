import React, { Component } from 'react';
import WithCounter from '../hoc/WithCounter';

export class CounterTwo extends Component {
    render() {
        const { count, incrementCount, decrementCount } = this.props
        return <div>
            <p>UserName : {this.props.userName}</p>
            <p>count : {count}</p>
            <button onClick={incrementCount}>increment</button>
            <button onClick={decrementCount}>decrement</button>
        </div>;
    }
}

export default WithCounter(CounterTwo)

