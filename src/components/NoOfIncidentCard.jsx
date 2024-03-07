import '../Css/NoOfIncidentCard.css'
const NoOfIncidentCard=(props)=>
{
        
        return (
                
<div className='IncidentType'>
        <img className="bd-placeholder-img rounded-circle " src={props.data.src} width="40" height="40" />
            <div >
             <h1>{props.data.Numbers}</h1>
             <p >{props.data.type}</p></div>
             </div>
        )
}

export default NoOfIncidentCard;