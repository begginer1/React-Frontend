import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/Stationhead/"
class StationHeadService {
   
    getAllIncident(){
        return axios.get(BASE_REST_API_URL +"ViewAllIncident")
    }
    getAllOfficers(){
        return axios.get(BASE_REST_API_URL +"ViewAllOfficer")
    }
}
export default new StationHeadService();