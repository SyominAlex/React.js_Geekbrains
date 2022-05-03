import {useEffect, useRef, useState} from "react";

import  {Form} from "./Form";
import "./Form.styles.css";

export const FormContainer = ({ onSubmit }) => {

    // контролируемые формы создаются с использованием стейта, неконтролируемые формы - с использованием рефов
    // контролируемые - когда мы полностью контролируем процесс и храним данные в компоненте в стейте

    const [value, setValue] = useState("");

    // const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue(""); // очистка поля ввода после submit
        // inputRef.current?.focus(); // решил добавить автофокус на поле
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // useEffect(() => {
    //     inputRef.current?.focus();
    // }, []);

    return ( /*inputRef={inputRef}*/
        <Form>
            value={value}
            handleChange={handleChange}
            onSubmit={handleSubmit}
        </Form>
        // <form onSubmit={handleSubmit}>
        //     <TextField
        //         style={{ margin: '20px' }}
        //         id="outlined-basic"
        //         label="Сообщение"
        //         variant="outlined"
        //         value={value}
        //         onChange={handleChange}
        //         inputRef={inputRef}
        //     />
        //     <Button className={"Button"}  variant={"contained"} type="submit">Отправить</Button>
        // </form>
    );
};
