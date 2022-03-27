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
//             <button onClick={() => setCount(count + 1)}>Click!</button> // второго аргумента у setCount нет, тоже можно сделать (prevCount) => {prevCount + 1}
//         </div>
//     );
// };

/* Пример на классовом компоненте */

import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0,
        name: "Alex",
    };

    // искусственно создали race condition - состояние гонки, когда есть 2 функции, которые изменяют одно и то же поле стейта
    // чтобы этого избежать, используем старый стейт oldState в функции, тогда React обеспечит актуальную информацию в переменной oldState
    // эмпирическое правило: если вычисляем новое значение на основе предыдущего в стейте, то используем setState с callback-функцией this.setState((oldState) => ({count: oldState.count + 1}), () => {
    // если просто туда запихиваем что-то из пользовательского ввода, можно просто использовать объект - короче в записи, чем функция this.setState({count: this.state.count - 1}, () => {
    increase = () => {
        this.setState((oldState) => ({count: oldState.count + 1}), () => {
            console.log("2nd arg", this.state.count);
        }); // setState асинхронный (но не возвращает промис)! после выполнения setState происходит обновление, а потом render, поэтому:
    };

    decrease = () => { // вызывается по событию, не зависящему от пользователя
        this.setState((oldState) => ({count: oldState.count - 1}), () => {
            console.log("2nd arg", this.state.count);
        }); // setState асинхронный (но не возвращает промис)! после выполнения setState происходит обновление, а потом render, поэтому:
    };

    render() {
        // console.log(this.state.name);
        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={this.increase}>Click!</button>
            </div>
        );
    }
}