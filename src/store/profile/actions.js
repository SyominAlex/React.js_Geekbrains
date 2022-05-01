export const TOGGLE_CHECKBOX = "PROFILE::TOGGLE_CHECKBOX";

export const SET_NAME = "PROFILE::SET_NAME";

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
};

// payload ожет быть объектом с любым уровнем вложенности, для упрощения работы с ним придумали action creators
export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});