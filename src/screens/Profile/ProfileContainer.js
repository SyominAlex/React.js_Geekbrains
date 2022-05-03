import {useDispatch, useSelector} from "react-redux";

import {Form} from "../../components/Form/Form";
import {setName, toggleCheckbox} from "../../store/profile/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (text) => {
        dispatch(setName(text));
    };

    return (
        <>
            <div className="profile">
                <h3>This is Profile</h3>
                <div>
                    <input type="checkbox" id="checkbox" onClick={handleClick}></input>
                    <label htmlFor="checkbox">show name</label>
                </div>
                {showName && <span>{name}</span>}
                <Form onSubmit={handleSubmit} />
            </div>
        </>
    );
};
