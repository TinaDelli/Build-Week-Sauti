export const UPDATE_APP = "UPDATE_APP"

export function updateAppName(newTitle){
    return{
        type: UPDATE_APP,
        payload: newTitle
    };
}

export const ADD_APP = 'ADD_APP';
export const addApp = newApp => {
    return{
        type: ADD_APP,
        payload: newApp,
    };
}