import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Form.styles.css";

export const Form = ({ onSubmit }) => {

    // контролируемые формы создаются с использованием стейта, неконтролируемые формы - с использованием рефов
    // контролируемые - когда мы полностью контролируем процесс и храним данные в компоненте в стейте

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue(""); // очистка поля ввода после submit
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*<input value={value} onChange={handleChange} type="text" required autoFocus />*/}
            {/*<input type="submit" />*/}
            <TextField value={value} onChange={handleChange} />
            <Button variant={"contained"} type="ssubmit">Submit</Button>
        </form>
    );
}