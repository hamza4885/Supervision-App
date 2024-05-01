import Axios from "../Connection/connection";

export const Login = async( email , password)=>{
    try {
        const response = await Axios.post('/auth/login' , {email , password} )
        return response.data
    } catch (error) {
        return error.response.data
    }
}