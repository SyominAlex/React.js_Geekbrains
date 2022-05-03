import {useDispatch, useSelector} from "react-redux";

import {Form} from "../../components/Form/Form";
import {setName, toggleCheckbox} from "../../store/profile/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {useEffect, useRef} from "react";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const prevName = useRef(); // изначально = undefined

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    useEffect(() => {
        prevName.current = name;
    }, [name]);
    /* После изменения name происходит обновление стейта за счет нового пропса или useSelector, происходит рендер этого компонента, вызов этой всей функции.
    * После того как рендер произошел - отрабатывают useEffect (его вызов происходит после return).
    * Т.е. произошел рендер с обновленным name, а после этого в предыдущее значение сохраняется name. */

    console.log(prevName.current);

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
}
