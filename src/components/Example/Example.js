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
// import {logDOM} from "@testing-library/react";

export class Child extends React.Component {
    constructor(props) {
        super(props); // вызывает конструктор родительского класса, всегда прописывать в любом классе, который от кого-то наследуется - до использования в конструктре this

        console.log('child constructor');
        this.state = {
            count: 0,
            name: "Alex",
        };
    }

    componentDidMount() {
        console.log('child did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('child did update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('child will unmount');
    }

    render() {
        console.log('child render');
        return (
            <div>
                <h4>Child component</h4>
            </div>
        );
    }
}

export class Counter extends React.Component {
    /*state = {
        count: 0,
        name: "Alex",
    };*/ // class field syntax - синтаксис полей класса

    constructor(props) {
        super(props); // вызывает конструктор родительского класса, всегда прописывать в любом классе, который от кого-то наследуется - до использования в конструктре this

        console.log('constructor');
        this.state = {
            count: 0,
            name: "Alex",
        }; // равносильно записи выше из class field syntax
    }

    componentDidMount() { // компонент смонтирован (сначала вызов конструктора, потом рендер, потом компонент смонтирован)
        /* Подготовительные методы: интервал setInterval, setTimeout, подключиться к БД,  отправить запрос из компонента,
        повесить слушателя на body или состояние подключения к сети,
        когда компонент появляется в ответ на нажатие кнопки, например - такие сайд-эффекты */
        console.log('component did mount');
    }

    // после componentDidMount возможен forceUpdate - никогда не надо пользоваться им = что-то делаете не так! "последняя заплатка"

    componentDidUpdate(prevProps, prevState) {
        /* сюда складывают сайд-эффекты типа таймаута, интервала, отправки запроса и подобных вещей
        * состояние отсюда меняют очень редко, и если это надо сделать, то используют условие (если ... то сделать setState) */
        console.log('component did update', prevProps, prevState);
    }

    // стадия размонтирования
    componentWillUnmount() {
        console.log('component will unmount'); // это не увидим, т.к. возникает, когда компонент был, но пропал
    }

    // искусственно создали race condition - состояние гонки, когда есть 2 функции, которые изменяют одно и то же поле стейта
    // чтобы этого избежать, используем старый стейт oldState в функции, тогда React обеспечит актуальную информацию в переменной oldState
    // эмпирическое правило: если вычисляем новое значение на основе предыдущего в стейте, то используем setState с callback-функцией this.setState((oldState) => ({count: oldState.count + 1}), () => {
    // если в стейт запихиваем что-то из пользовательского ввода, можно просто использовать объект - короче в записи, чем функция this.setState({count: this.state.count - 1}, () => {
    increase = () => {
        this.setState((oldState) => ({count: oldState.count + 1}), () => {
            console.log("2nd arg", this.state.count);
        }); // setState асинхронный (но не возвращает промис)! после выполнения setState происходит обновление, а потом render, поэтому:

        // так писать не надо: не надо мутировать стейт! this.state = {...};
    };

    decrease = () => { // вызывается по событию, не зависящему от пользователя
        this.setState((oldState) => ({count: oldState.count - 1}), () => {
            console.log("2nd arg", this.state.count);
        }); // setState асинхронный (но не возвращает промис)! после выполнения setState происходит обновление, а потом render, поэтому:
    };

    render() {
        // console.log(this.state.name);
        console.log('render');
        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={this.increase}>Click!</button>
                <Child />
            </div>
        );
    }
}

// условный рендер
// const a = true && 4; // 4 приведение операндов к FALSE или последний (И спотыкается на ЛЖИ, ИЛИ спотыкается на ИСТИНЕ)
// const a = 0 && 4; // 0

