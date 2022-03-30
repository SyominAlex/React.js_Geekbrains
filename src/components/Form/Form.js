import {useState} from "react";

export const Form = () => {
    // контролируемые формы создаются с использованием стейта, неконтролируемые формы - с использованием рефов
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} type="text"/>
            <input type="submit"/>
        </form>
    );
}