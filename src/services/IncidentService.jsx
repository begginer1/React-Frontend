import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/incident/"

class IncidentService {

    async getNoIncident(userId,TokenObj,incidentType)
    {
       
        return axios.get(BASE_REST_API_URL+'GetIncidentNo/'+userId+'/'+incidentType,
        {
            headers:{
                'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Credentials':true,
             Authorization:`Bearer ${TokenObj.accessToken}`
            }
        });
    }

    async deleteIncident(incidentId,TokenObj)
    {
       
        return axios.delete(BASE_REST_API_URL+"deleteIncident/"+incidentId,
        {
            headers:{
                'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Credentials':true,
             Authorization:`Bearer ${TokenObj.accessToken}`
            }
        });
    }

    async OfficerAssignIncidentNumber(officerId,TokenObj,incidentType)
    {
 
     
        return axios.get(BASE_REST_API_URL+'GetOfficerAssignIncidentNo?officerId='+officerId+"&incidentType="+incidentType,
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
export default new IncidentService()