import { AuthService } from "./auth.service";

const registerUser = async () => {
    try {
        const result = await AuthService.registerUser()
    } catch (error) {
        console.log(error);
    }
}
const loginUser = async () => {
    try {
        const result = await AuthService.registerUser()
    } catch (error) {
        console.log(error);
    }
}
const myAccount = async () => {
    try {
        const result = await AuthService.registerUser()
    } catch (error) {
        console.log(error);
    }
}

export const AuthController = {
    registerUser,
    loginUser,
    myAccount
}