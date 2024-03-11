import '../Css/RegisterUserForm.css'
export const GraffetiForm=()=>
{
    return(
        <div className="RegisterContainer">
        <div className="FormRegister">
        <h2>Register Here</h2>
        <h4>Graffeti</h4>
            <form id="FormId">
            <label >Image</label>
            <br/>
            <input type="text"  placeholder="image url "/>
            <br/><br/>
            <label >Description</label> 
            <br/>
            <input type="textbox"placeholder="Description"/>
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