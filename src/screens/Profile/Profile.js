import {connect/*, useDispatch, useSelector*/} from "react-redux";

import {Form} from "../../components/Form/Form";
import {setName, toggleCheckbox} from "../../store/profile/actions";

// export const Profile = () => {
//     const dispatch = useDispatch(); // dispatch - это результат вызова хука useDispatch, который возвращает функцию dispatch
//
//     const state = useSelector(state => state);
//
//     const handleClick = () => {
//         dispatch(toggleCheckbox);
//     };
//
//     const handleSubmit = (text) => {
//         dispatch(setName(text));
//     };
//
//     return (
//         <>
//             <div className="profile">
//                 <h3>This is Profile</h3>
//                 <div>
//                     <input type="checkbox" id="checkbox" onClick={handleClick}></input>
//                     <label htmlFor="checkbox">show name</label>
//                 </div>
//                 {state.showName && <span>{state.name}</span>}
//                 <Form onSubmit={handleSubmit} />
//             </div>
//         </>
//     );
// }

const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
    // console.log(name, showName, changeName, changeCheckbox);
    const handleClick = () => {
        changeCheckbox();
    };

    const handleSubmit = (text) => {
        changeName(text);
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

const mapStateToProps = (state) => ({
    name: state.profile.name,
    showName: state.profile.showName,
});

const mapDispatchToProps = {
    changeName: setName,
    changeCheckbox: () => toggleCheckbox,
};

export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);