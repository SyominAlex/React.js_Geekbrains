// import React from "react";
// import {logDOM} from "@testing-library/react";
// import { useEffect, useState } from "react";

import {useEffect, useRef, useState} from "react";
// import { Button, TextField } from "@mui/material";
// import "./FormContainer.styles.css";

/* Пример на функциональных компонентах
* - нет никаких методов, которые можно вызывать, как у классовых компонентов
* - нет никаких this
* - всё, что есть, реализуется исключительно с помощью хуков
* - хук - это специальная функция React, на ее использование наложены ограничения:
*   -- ее корректно можно вызвать только внутри функционального компонента React
*   -- ее всегда нужно вызывать на верхнем уровне (нельзя вкладывать в условия, внутри циклов, после слова return и т.п.)
*   -- все хуки начинаются со слова use..., стандартных более 20, можно написать свой кастомный хук
*   --  SokolAlexander: название со слова use - это, если что, просто хороший тон) никакой ошибки не будет, если вы назовете по другому, просто возникнут сложности в понимании (в отличие от других правил - там прям ошибки посыпятся)) */

// export const Counter = ({randomNumber}) => {
//     // let count = 0;
//     const [count, setCount] = useState(0);
//     // const countState = useState(0);
//     // const count = countState[0];
//     // const setCount = countState[1];
//
//     // хук useEffect() - функция, которая принимает аргументами коллбэк и массив зависимостей, от чего зависит момент ее исполнения
//     // если есть пустой массив зависимостей, вызовется только 1 раз на монтировании
//     useEffect(() => {
//         console.log('like did mount');
//     }, []);
//
//     // если нет массива зависимостей - вызовется на монтировании и на каждом обновлении
//     useEffect(() => {
//         console.log('like did mount + did update (no dependencies array)');
//         return () => { // возвращаемая из useEffect() с НЕпустым массивом зависимостей функция отрабатывает перед обновлением компонента
//             console.log('like will unmount (no dependencies array)');
//         }
//     });
//
//     // если в массиве зависимостей что-то есть (например, count) - вызовется при монтировании компонента и при изменении любой переменной из массива зависимостей
//     useEffect(() => {
//         console.log('like did mount + count update');
//     }, [count]);
//
//     useEffect(() => {
//         console.log('like did mount + randomNumber update');
//     }, [randomNumber]);
//
//     useEffect(() => {
//         console.log('like did mount + count or randomNumber update');
//     }, [count, randomNumber]);
//
//     /* Таким образом можно постоянно обновлять слушателя: не вешать каждый раз, а делать возврат useEffect() и ставить новый useEffect() */
//     useEffect(() => {
//         console.log('like did mount + count or randomNumber update [count, randomNumber]');
//         return () => { // возвращаемая из useEffect() с НЕпустым массивом зависимостей функция отрабатывает перед обновлением компонента
//             console.log('like will unmount [count, randomNumber]');
//         }
//     }, [count, randomNumber]);
//
//     useEffect(() => {
//         return () => { // возвращаемая из useEffect() с пустым массивом зависимостей функция отрабатывает перед размонтированием компонента
//             console.log('like will unmount');
//         }
//     }, []);
//
//     return (
//         <div>
//             <h4>{count}</h4>
//             <button onClick={() => setCount(count + 1)}>Click!</button> {/*второго аргумента у setCount нет, тоже можно сделать (prevCount) => {prevCount + 1}*/}
//             <div>{randomNumber}</div>
//         </div>
//     );
// };

/* Пример на классовом компоненте */

// export class Child extends React.Component {
//     constructor(props) {
//         super(props); // вызывает конструктор родительского класса, всегда прописывать в любом классе, который от кого-то наследуется - до использования в конструктре this
//
//         console.log('child constructor');
//         this.state = {
//             count: 0,
//             name: "Alex",
//         };
//     }
//
//     componentDidMount() {
//         console.log('child did mount');
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log('child did update', prevProps, prevState);
//     }
//
//     componentWillUnmount() {
//         console.log('child will unmount');
//     }
//
//     render() {
//         console.log('child render');
//         return (
//             <div>
//                 <h4>Child component</h4>
//             </div>
//         );
//     }
// }
//
// export class Counter extends React.Component {
//     /*state = {
//         count: 0,
//         name: "Alex",
//     };*/ // class field syntax - синтаксис полей класса
//
//     constructor(props) {
//         super(props); // вызывает конструктор родительского класса, всегда прописывать в любом классе, который от кого-то наследуется - до использования в конструктре this
//
//         console.log('constructor');
//         this.state = {
//             count: 0,
//             name: "Alex",
//             showChild: false,
//         }; // равносильно записи выше из class field syntax
//     }
//
//     componentDidMount() { // компонент смонтирован (сначала вызов конструктора, потом рендер, потом компонент смонтирован)
//         /* Подготовительные методы: интервал setInterval, setTimeout, подключиться к БД,  отправить запрос из компонента,
//         повесить слушателя на body или состояние подключения к сети,
//         когда компонент появляется в ответ на нажатие кнопки, например - такие сайд-эффекты */
//         console.log('component did mount');
//         /*this.interval = setInterval(() => {
//             this.setState((prevState) => ({
//                 count: prevState.count + 1,
//             }));
//         }, 1000);*/
//     }
//
//     // после componentDidMount возможен forceUpdate - никогда не надо пользоваться им = что-то делаете не так! "последняя заплатка"
//
//     componentDidUpdate(prevProps, prevState) {
//         /* сюда складывают сайд-эффекты типа таймаута, интервала, отправки запроса и подобных вещей
//         * состояние отсюда меняют очень редко, и если это надо сделать, то используют условие (если ... то сделать setState) */
//         console.log('component did update', prevProps, prevState);
//     }
//
//     // стадия размонтирования, здесь нужно чистить таймеры, setInterval и др.
//     componentWillUnmount() {
//         console.log('component will unmount'); // это не увидим, т.к. возникает, когда компонент был, но пропал
//         // clearInterval(this.interval);
//     }
//
//     // искусственно создали race condition - состояние гонки, когда есть 2 функции, которые изменяют одно и то же поле стейта
//     // чтобы этого избежать, используем старый стейт oldState в функции, тогда React обеспечит актуальную информацию в переменной oldState
//     // эмпирическое правило: если вычисляем новое значение на основе предыдущего в стейте, то используем setState с callback-функцией this.setState((oldState) => ({count: oldState.count + 1}), () => {
//     // если в стейт запихиваем что-то из пользовательского ввода, можно просто использовать объект - короче в записи, чем функция this.setState({count: this.state.count - 1}, () => {
//     increase = () => {
//         this.setState((oldState) => ({count: oldState.count + 1}), () => {
//             console.log("2nd arg", this.state.count);
//         }); // setState асинхронный (но не возвращает промис)! после выполнения setState происходит обновление, а потом render, поэтому:
//
//         // так писать не надо: не надо мутировать стейт! this.state = {...};
//     };
//
//     decrease = () => { // вызывается по событию, не зависящему от пользователя
//         this.setState((oldState) => ({count: oldState.count - 1}), () => {
//             console.log("2nd arg", this.state.count);
//         }); // setState асинхронный (но не возвращает промис)! после выполнения setState происходит обновление, а потом render, поэтому:
//     };
//
//     toggleChild = () => {
//         this.setState((prevState) => ({
//             showChild: !prevState.showChild,
//         }));
//     };
//
//     render() {
//         // console.log(this.state.name);
//         console.log('render');
//         return (
//             <div>
//                 <h4>{this.state.count}</h4>
//                 {/*<button onClick={this.increase}>Click!</button>*/}
//                 <button onClick={this.toggleChild}>Click!</button>
//                 {this.state.showChild && <Child />} {/*условный рендер*/}
//             </div>
//         );
//     }
// }

// условный рендер
// const a = true && 4; // 4 приведение операндов к FALSE или последний (И спотыкается на ЛЖИ, ИЛИ спотыкается на ИСТИНЕ)
// const a = 0 && 4; // 0
// const a1 = 4 && true; // true
// const b1 = 4 && 0; // 0

/* CHILDREN EXAMPLE */
export const ExampleForm = ({ onSubmit, render }) => {

    // контролируемые формы создаются с использованием стейта, неконтролируемые формы - с использованием рефов
    // контролируемые - когда мы полностью контролируем процесс и храним данные в компоненте в стейте

    const [value, setValue] = useState("");

    // const inputRef = useRef(null);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue(""); // очистка поля ввода после submit
        inputRef.current?.focus(); // решил добавить автофокус на поле
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        console.log("did mount", inputRef);
        inputRef.current?.focus();

        return () => {
            console.log("will unmount");
        }
    }, []);

    /* в чилдрены можно передавать функцию handleChange и value объектом */
    return (
        <form onSubmit={handleSubmit}>
            {render({ value, handleChange })}
        </form>
    );
}

// пример подстановки
// const name = "value";
//
// const obj = {
//     name: 1,
//     // value: 2,
//     [name]: 2,
// };
//
// console.log(obj.name, obj[name]); // выведет 1 2, т.к. obj[name] === obj.value;
// console.log(obj.name, obj.value); // аналогично вычисляется значение ключа


// Пример функции высшего порядка
// const foo = (a, b) => `${a} + ${b}`;

// const addLog = (func) => {
//     console.log('0-0-0-0-0-0');
//     func();
// };

// function addLog(func) {
//     return function (...args) {
//         console.log('Пример функции высшего порядка', ...args);
//         return func(...args);
//     }
// }
//
// const fooWithLog = addLog(foo)/*(100, 500)*/;
//
// fooWithLog(1, 2, 3);
// fooWithLog(4, 5);
