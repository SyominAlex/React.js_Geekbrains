import {Button} from "@mui/material";

export const Home = ({ onAuth }) => (
    <>
        <h4>Home page</h4>
        <Button onClick={onAuth}>Auth</Button>
    </>
);
