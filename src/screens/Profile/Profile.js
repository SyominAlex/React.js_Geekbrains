import {useDispatch, useSelector} from "react-redux";

import {Form} from "../../components/Form/Form";
import {setName, toggleCheckbox} from "../../store/profile/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {usePrev} from "../../utils/usePrev";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    /* После изменения name происходит обновление стейта за счет нового пропса или useSelector, происходит рендер этого компонента, вызов этой всей функции.
    * После того как рендер произошел - отрабатывают useEffect (его вызов происходит после return).
    * Т.е. произошел рендер с обновленным name, а после этого в предыдущее значение сохраняется name. */

    const prevName = usePrev(name);
    console.log(prevName);

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
