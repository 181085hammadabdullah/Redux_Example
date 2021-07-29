import { ADMIN_LOGIN, ADMIN_REG, GET_USER_DATA } from './types';
import Api from './Api';
const END_POINT1 = 'register';
export const UserReg = data => async dispatch => {
    const response = await Api.post(END_POINT1, data);
    if (response.data.Errors) {
        return dispatch({
            type: ADMIN_REG,
            errors: response.data.Errors
        });
    }
    else
    {
        localStorage.setItem('token',response.data.token);
        return dispatch({
            type: ADMIN_REG,
            payload: response.data
        });
    }
       

}
