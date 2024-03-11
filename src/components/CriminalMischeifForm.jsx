import '../Css/RegisterUserForm.css'
export  const CriminalMischeifForm=()=>
{
    return(
        <div className="RegisterContainer">
        <div className="FormRegister">
        <h2>Register Here</h2>
        <h4>Criminal Mischeif</h4>
            <form id="FormId">
            <label >Incident Date</label>
            <br/>
            <input type="date"  placeholder="Incident Date "/>
            <br/><br/>
            <label >Item Name</label>
            <br/>
            <input type="text"  placeholder="Name "/>
            <br/><br/>
            <label >Description</label> 
            <br/>
            <input type="textbox"placeholder="Description"/>
            <br/><br/>
            <label >Person included</label> 
            <br/>
            <input type="textbox"placeholder="Person included"/>
            <br/><br/>
            <label >Location</label> 
            <br/>
            <input type="text"placeholder=" Location"/>
            <br/>
            <br/>
           <input className="btn btn-primary" type="submit"/>
           </form>
    </div>
    
</div>
    )
}