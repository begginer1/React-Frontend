import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/Stationhead/"
class StationHeadService {
   
    getAllIncident(TokenObj){
        console.log("token received",TokenObj.accessToken)
        return axios.get(BASE_REST_API_URL+"ViewAllIncident",
        {
            headers:{
                Authorization:`Bearer ${TokenObj.accessToken}`
         
               
            }
        })
    }
    getAllOfficers(TokenObj){
        return axios.get(BASE_REST_API_URL +"ViewAllOfficer",
        {
            headers:{
                 Authorization:`Bearer ${TokenObj.accessToken}`
         
                
            }
        })
    }

    RegisterOfficer(Officer,TokenObj){
        return axios.post(BASE_REST_API_URL +"RegisterOfficer",Officer,
        {
            headers:{
                Authorization:`Bearer ${TokenObj.accessToken}`
         
                
            }
        })
    }

    VerifyIncident(IncidentId,TokenObj){
        console.log(IncidentId)
        return axios.put(BASE_REST_API_URL +"ChangeStatus?incidentId="+IncidentId,
        {
            headers:{
                Authorization:`Bearer ${TokenObj.accessToken}`
         
                
            }
        })  
    }

    AssignIncidentToOfficer(incidentId,officerId,TokenObj){
        console.log(TokenObj.accessToken)
        return axios.post(BASE_REST_API_URL +"AssignOfficerToIncident/"+incidentId+'/officer/'+officerId,{},
        {
            headers:{
                'Authorization':`Bearer ${TokenObj.accessToken}`
         
                
            }
        })  
    }
}
export default new StationHeadService();