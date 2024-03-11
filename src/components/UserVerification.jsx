import { useContext } from "react"
import { TokenContext } from "./TokenContext"
import UserService from "../services/UserService";
import UserDashboard from "./UserDashboard";
import {RegisterUserForm} from './RegisterUserForm'
export default UserVerification=()=>{
    const exist=useState(false)
    useEffect(()=>{
        const TokenObj=useContext(TokenContext);
        UserService.getIdByEmail(TokenObj).then()
        .catch(error)
        {
            console.log(error)
        }
    },[])
    return (
        exist?<UserDashboard/>:<RegisterUserForm/>
    )
}