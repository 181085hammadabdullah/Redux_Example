import { ADMIN_LOGIN, ADMIN_REG, GET_USER_DATA } from '../actions/types'
import  Routes  from '../Routes'

const initialState = {
    Admin: null,
    Admin_Token: null,
    errors: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADMIN_REG:

            if (action.errors) {
                return {
                    ...state,
                    errors: action.errors,
                    Admin:null,
                    Admin_Token:null
                }
            }
            else {
                
                return {
                    ...state,
                    Admin: action.payload.user,
                    Admin_Token: action.payload.token,
                    errors: null
                }

            }
        default:
            return state

    }
}