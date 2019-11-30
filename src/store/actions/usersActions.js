export const UPDATE_USERS = "UPDATE_USERS";

export const fetch_user = (dispatch) => {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => dispatch({type:UPDATE_USERS, payload:res.data}));
};


export default fetch_user;
