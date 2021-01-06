const initialState = {
    projects: [],
    user: {
        name: '',
        password: '',
        email: '',
        role: '',
        id: ''
    },
    userProjects: [],
    isLoading: true
}


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}