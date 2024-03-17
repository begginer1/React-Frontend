import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/User/"

class UserService {
    async generateReport(id) {
        return axios.get(BASE_REST_API_URL +"GenerateReport?inc_id="+id);
    }
   async addUser(user,TokenObj){
        return  await axios.post(BASE_REST_API_URL+'CreateUser',user,
        {
            headers:{
                'Access-Control-Allow-Origin': '*',
                Authorization:`Bearer ${TokenObj.accessToken}`
               
                // Authorization:`Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYWNoaW4xIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMDIyOTk0NiwiZXhwIjoxNzEwODM0NzQ2fQ.q--2Z2DkHrAW4iB97V7X1bJWIBZJw8A_cRTsfVr6AmnKQc2phuE3HbRSBmnXFa4e`
            }
        });
    }

    async GenerateIncident(user_id,incidentObj,TokenObj){
        return  await axios.post(BASE_REST_API_URL+'AddIncident/'+user_id,incidentObj,
        {
            headers:{
                Authorization:`Bearer ${TokenObj.accessToken}`
         
               
            }
        });
    }

    async GetUser(user_id,TokenObj){
        return  await axios.get(BASE_REST_API_URL+'GetUser/'+user_id,
        {
            headers:{
                Authorization:`Bearer ${TokenObj.accessToken}`
         
               
            }
        });
    }
    async getIdByEmail(TokenObj)
    {
       
        return axios.get(BASE_REST_API_URL+'GetIdByEmail/'+TokenObj.userDto.email,
        {
            headers:{
                'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Credentials':true,
             Authorization:`Bearer ${TokenObj.accessToken}`
            }
        });
    }

    async downloadReport(incidentId,TokenObj)
    {
       
        return axios.get(BASE_REST_API_URL+'GenerateReport?incidentId='+incidentId,
        {
            headers:{
                'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Credentials':true,
             Authorization:`Bearer ${TokenObj.accessToken}`
            }
        });
    }
 
}
export default new UserService();