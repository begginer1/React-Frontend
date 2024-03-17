import axios from "axios";

const BASE_REST_API_URL="http://localhost:8082/api/v1/Officer/"
class OfficerSerice
{
async getOfficerByEmail(TokenObj)
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

async IncidentOfOfficer(officerId,TokenObj)
{
  
    return axios.get(BASE_REST_API_URL+'ViewOfficerAssignIncident?officerId='+officerId,
    {
        headers:{
            'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Credentials':true,
         Authorization:`Bearer ${TokenObj.accessToken}`
        }
    });
}

 closeIncident(incidentId,TokenObj)
{
    
    return axios.put(BASE_REST_API_URL+'ClosedIncidentById?incidentId='+incidentId,{},
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

export default new OfficerSerice()