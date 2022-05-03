import {Form} from "../../components/Form/Form";

export const Profile = ({ name, showName, handleClick, handleSubmit }) => (
        <>
            <div className="profile">
                <h3>This is Profile</h3>
                <div>
                    <input type="checkbox" id="checkbox" onClick={handleClick}></input>
                    <label htmlFor="checkbox">show name</label>
                </div>
                {{showName} && <span>{name}</span>}
                <Form onSubmit={handleSubmit} />
            </div>
        </>
    );
