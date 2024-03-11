import NoOfIncidentCard from "./NoOfIncidentCard";

export function IncidentTypeComponent(){
    return(
        <div style={{width:'100%'}}>
            <div  className="Block" ><p style={{textAlign:'center',fontWeight:'bold'}}>Number of Incidents</p></div>
        <div className=" IncidentContainer">  
        <div className="Incidents">
            <span className='IncidentSpan'>
        <NoOfIncidentCard data={{'src':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nmmyasrAUuC7jOG_Co7gtIzP1npBR2zxlw&usqp=CAU",'type':'Graffeti','Numbers':23}}/>
        <NoOfIncidentCard data={{'src':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BfZwFBhVYvlma3FgJa6zDgX7BysQUghPDw&usqp=CAU",'type':'Criminal Mischief','Numbers':23}}/>
        </span>
        <span className='IncidentSpan'>
        <NoOfIncidentCard data={{'src':"https://pandc.stanmorepublicschool.com.au/wp-content/uploads/2021/11/lost-and-found-lrg.jpeg",'type':'Lost & Found','Numbers':23}}/>
        <NoOfIncidentCard data={{'src':"https://thedefenders.net/wp-content/uploads/2023/06/man-inside-grocery-putting-something-in-jacket-pocket.jpeg",'type':'Petit Larceny','Numbers':23}}/>
        </span>
        </div>
        </div>
  
        {/* <div className="Block"></div> */}
        </div>
)
}