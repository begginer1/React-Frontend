import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8082/api/v1/Stationhead/"
class StationHeadService {
   
    async getAllIncident(TokenObj){
        console.log(TokenObj.accessToken)
        return axios.get(BASE_REST_API_URL +"ViewAllIncident",TokenObj,
        {
            headers:{
                // Authorization:`Bearer ${TokenObj.accessToken}`
         
                 Authorization:`Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYW5qYXlAMSIsInJvbGUiOiJST0xFX1NUQVRJT05fSEVBRCIsImlhdCI6MTcxMDQ0NTkxMywiZXhwIjoxNzExMDUwNzEzfQ.znAqYs1b9wRqf4G3xI6TDpXTzw55K_QMj2-rvmAsQfBBtuFnPEwjuVzkPvok7MY2`
            }
        })
    }
    getAllOfficers(){
        return axios.get(BASE_REST_API_URL +"ViewAllOfficer",
        {
            headers:{
                // Authorization:`Bearer ${TokenObj.accessToken}`
         
                 Authorization:`Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYW5qYXlAMSIsInJvbGUiOiJST0xFX1NUQVRJT05fSEVBRCIsImlhdCI6MTcxMDQ0NTkxMywiZXhwIjoxNzExMDUwNzEzfQ.znAqYs1b9wRqf4G3xI6TDpXTzw55K_QMj2-rvmAsQfBBtuFnPEwjuVzkPvok7MY2`
            }
        })
    }

    RegisterOfficer(Officer,TokenObj){
        return axios.post(BASE_REST_API_URL +"RegisterOfficer",Officer,
        {
            headers:{
                Authorization:`Bearer ${TokenObj.accessToken}`
         
                //  Authorization:`Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYW5qYXlAMSIsInJvbGUiOiJST0xFX1NUQVRJT05fSEVBRCIsImlhdCI6MTcxMDQ0NTkxMywiZXhwIjoxNzExMDUwNzEzfQ.znAqYs1b9wRqf4G3xI6TDpXTzw55K_QMj2-rvmAsQfBBtuFnPEwjuVzkPvok7MY2`
            }
        })
    }
}
export default new StationHeadService();