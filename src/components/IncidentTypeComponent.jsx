import { useContext, useEffect, useState } from "react";
import NoOfIncidentCard from "./NoOfIncidentCard";
import { AuthContext } from "./service/AuthProvider";
import IncidentService from "../services/IncidentService";

export function IncidentTypeComponent(){
    const [caseNoPL,setCaseNoPl]=useState(0)
    const [caseNoCM,setCaseNoCm]=useState(0)
    const [caseNoGR,setCaseNoGr]=useState(0)
    const [caseNoLP,setCaseNoLp]=useState(0)
    const {userId,auth}=useContext(AuthContext)
    console.log("auth",auth)
   const getNoOfCase=(incidentType)=>{
        IncidentService.getNoIncident(userId,auth,incidentType).then((response)=>
        {
            console.log(response.data)
            if(incidentType==="Graffeti")
            setCaseNoGr(response.data)
            else if(incidentType==="Criminal Mischief")
            setCaseNoCm(response.data)
            else if(incidentType==="Petit Larceny")
            setCaseNoPl(response.data)
            else if(incidentType==="Lost Property")
            setCaseNoLp(response.data)
    })
    .catch((error)=>
    {
        console.log(error)
    })
    }

    useEffect(()=>{
        getNoOfCase("Graffeti")  
        getNoOfCase("Criminal Mischief") 
        getNoOfCase("Lost Property") 
        getNoOfCase("Petit Larceny") 
    },[])
    return(
        <div style={{width:'100%'}}>
            <div  className="Block" ><p style={{textAlign:'center',fontWeight:'bold'}}>Number of Incidents</p></div>
        <div className=" IncidentContainer">  
        <div className="Incidents">
            <span className='IncidentSpan'>
           
        <NoOfIncidentCard data={{'src':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nmmyasrAUuC7jOG_Co7gtIzP1npBR2zxlw&usqp=CAU",'type':'Graffeti','Numbers':caseNoGR}}/>
       
        <NoOfIncidentCard data={{'src':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BfZwFBhVYvlma3FgJa6zDgX7BysQUghPDw&usqp=CAU",'type':'Criminal Mischief','Numbers':caseNoCM}}/>
        </span>
        <span className='IncidentSpan'>
        <NoOfIncidentCard data={{'src':"https://pandc.stanmorepublicschool.com.au/wp-content/uploads/2021/11/lost-and-found-lrg.jpeg",'type':'Lost & Found','Numbers':caseNoLP}}/>
        <NoOfIncidentCard data={{'src':"https://thedefenders.net/wp-content/uploads/2023/06/man-inside-grocery-putting-something-in-jacket-pocket.jpeg",'type':'Petit Larceny','Numbers':caseNoPL}}/>
        </span>
        </div>
        </div>
  
        <div className="Block"></div>
        </div>
)
}