import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/Stationhead/"
class StationHeadService {
   
    getAllIncident(TokenObj){
       
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
     
        return axios.put(BASE_REST_API_URL +"ChangeStatus?incidentId="+IncidentId,{},
        {
            headers:{
                Authorization:`Bearer ${TokenObj.accessToken}`
         
                
            }
        })  
    }

    AssignIncidentToOfficer(incidentId,officerId,TokenObj){
       
        return axios.post(BASE_REST_API_URL +"AssignOfficerToIncident/"+incidentId+'/officer/'+officerId,{},
        {
            headers:{
                'Authorization':`Bearer ${TokenObj.accessToken}`
         
                
            }
        })  
    }

    deleteOfficer(officerId,TokenObj){
       
        return axios.delete(BASE_REST_API_URL +"DeleteOfficer?officerId="+officerId,
        {
            headers:{
                'Authorization':`Bearer ${TokenObj.accessToken}`
         
                
            }
        })  
    }
}
export default new StationHeadService();