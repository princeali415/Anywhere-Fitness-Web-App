import { SET_USER } from "../actions/index";

const initialState = {
    classes: [],
    user: {
        email: '',
        password: '',
        role: '',
        id: '',
    },
    isLoading: true
}


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload.email,
                    password: action.payload.password,
                    role: action.payload.role,
                    id: action.payload.id,
                }
            }
        default:
            return state;
    }
}