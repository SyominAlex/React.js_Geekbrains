import { Button, TextField } from "@mui/material";

import "./Form.styles.css";

export const Form = ({ value, inputRef, handleSubmit, handleChange }) => (
    <form onSubmit={handleSubmit}>
        <TextField
            style={{ margin: '20px' }}
            id="outlined-basic"
            label="Сообщение"
            variant="outlined"
            value={value}
            onChange={handleChange}
            inputRef={inputRef}
        />
        <Button className={"Button"}  variant={"contained"} type="submit">Отправить</Button>
    </form>
);
