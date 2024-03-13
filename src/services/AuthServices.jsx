import axios from 'axios';
const BaseURL='http://localhost:8082/api/authenticate'
class AuthService
{

    async Login(User)
    {
        
        return axios.post(BaseURL+'/login',User,
        {headers:{
            'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    })
    }

    Register(User)
    {
        return axios.post(BaseURL+'/register',User)
    }
}

export default new AuthService()