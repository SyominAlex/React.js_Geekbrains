/* Пример на функциональном компоненте */

// import { useState } from "react";
//
// export const Counter = () => {
//     // let count = 0;
//     const [count, setCount] = useState(0);
//     // const countState = useState(0);
//     // const count = countState[0];
//     // const setCount = countState[1];
//     return (
//         <div>
//             <h4>{count}</h4>
//             <button onClick={() => setCount(count + 1)}>Click!</button>
//         </div>
//     );
// };

/* Пример на классовом компоненте */

import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0,
    };

    handleClick = () => this.setState({count: this.state.count + 1});

    render() {
        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={this.handleClick}>Click!</button>
            </div>
        );
    }
}