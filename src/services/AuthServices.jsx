import axios from 'axios';
const BaseURL='http://localhost:8082/api/authenticate'
class AuthService
{

    Login(User)
    {
        axios.post(BaseURL+'/login',User);
    }

    Register(User)
    {
        axios.post(BaseURL+'/register',User)
    }
}

export default new AuthService()