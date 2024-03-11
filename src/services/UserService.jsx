import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/User/"

class UserService {
    generateReport(id) {
        return axios.get(BASE_REST_API_URL +"GenerateReport?inc_id="+id);
    }
    addUser(user,TokenObj){
        return  axios.post('http://localhost:8082/api/v1/User/CreateUser',user,
        {
            headers:{
                Authorization:`Bearer ${TokenObj.token}`
            }
        });
    }
    getIdByEmail(TokenObj)
    {
        return axios.get(BASE_REST_API_URL+'getIdByEmail'+TokenObj.email,
        {
            headers:{
             Authorization:`Bearer ${TokenObj.token}`
            }
        });
    }
}
export default new UserService();