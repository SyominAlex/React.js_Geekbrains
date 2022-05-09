import {Button} from "@mui/material";

import {FormContainer} from "../../components/Form/FormContainer";

export const Profile = ({ name, showName, onLogout, handleClick, handleSubmit }) => (
    <>
        <div className="profile">
            <h3>This is Profile</h3>
            <Button onClick={onLogout}>LOGOUT</Button>
            <div>
                <input type="checkbox" id="checkbox" onClick={handleClick}></input>
                <label htmlFor="checkbox">show name</label>
            </div>
            {showName && <span>{name}</span>}
            <FormContainer onSubmit={handleSubmit} />
        </div>
    </>
);