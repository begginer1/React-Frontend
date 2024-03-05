import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/User/"
class UserService {
    generateReport(id) {
        return axios.get(BASE_REST_API_URL +"GenerateReport?inc_id="+id);
    }
    addUser(user){
        return  axios.post(BASE_REST_API_URL,user);
    }
}
export default new UserService();