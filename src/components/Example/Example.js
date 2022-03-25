import { useState } from "react";

export const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0);
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={() => setCount(count + 1)}>Click!</button>
        </div>
    );
};