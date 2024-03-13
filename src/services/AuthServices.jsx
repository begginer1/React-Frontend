import axios from 'axios';
const BaseURL='http://localhost:8082/api/authenticate'
class AuthService
{

    async Login(User)
    {
        return axios.post(BaseURL+'/login',User);
    }

    Register(User)
    {
        return axios.post(BaseURL+'/register',User)
    }
}

export default new AuthService()