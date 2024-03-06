
export function IncidentTypeComponent(){
    return(
        <div className=" IncidentContainer">  
        <div className="Incidents">
            <span className='IncidentSpan'>
        <div className='IncidentType'> 
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nmmyasrAUuC7jOG_Co7gtIzP1npBR2zxlw&usqp=CAU" width="40" height="40" />
        <p>Graffeti</p></div>
        <div className='IncidentType'> 
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BfZwFBhVYvlma3FgJa6zDgX7BysQUghPDw&usqp=CAU" width="40" height="40" />
        <p>Criminal Mischief</p></div>
        </span>
        <span className='IncidentSpan'>
        <div className='IncidentType'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://thedefenders.net/wp-content/uploads/2023/06/man-inside-grocery-putting-something-in-jacket-pocket.jpeg" width="40" height="40" />
             <p>Petit larcency</p></div>
        <div className='IncidentType'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://pandc.stanmorepublicschool.com.au/wp-content/uploads/2021/11/lost-and-found-lrg.jpeg" width="40" height="40" />
             <p>Lost and Found</p></div>
        </span>
        </div>
        </div>
)
}