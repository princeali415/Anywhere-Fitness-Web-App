import { axiosWithAuth } from './../utils/axiosWithAuth';

export const SET_USER = 'SET_USER';

export const setUser = user => {
    console.log("in actions: ", user);
    return(dispatch) => {
        dispatch({type: SET_USER, payload: user});
    }
}