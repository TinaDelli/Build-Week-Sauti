import { UPDATE_APP, ADD_APP } from '../actions';

const initialState = {
    title: 'Start Flow Here',
    screens: [
        { name: 'Response One', completed: false, id: 123456 },
        { name: 'Response Two', completed: false, id: 876543 }
    ]
};

function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_APP:
        return{
            ...state,
            title: action.payload
        };
        case ADD_APP:
        return{
            ...state,
            screens: [
               ...state.screens,
               {
                   name: action.payload,
                   completed:false,
                   id:Date.now()
               }
            ]
        };
        default:
        return state; 
    }
}

export default reducer;