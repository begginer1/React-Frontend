import '../Css/RegisterUserForm.css'
export const RegisterOfficerForm=()=>
{
    return(
        <div className="RegisterContainer">
        <div className="FormRegister">
            <h2>Register Here</h2>
            <form id="FormId">
            <label >Name</label>
            <br/>
            <input type="text"  placeholder="Enter your name "/>
            <br/><br/>
            <label >Batch Number</label>
            <br/>
            <input type="text"  placeholder="Enter your batch Number "/>
            <br/><br/>
            <label >Rank</label> 
            <br/>
            <input type="textbox"placeholder="Enter your rank"/>
            <br/><br/>
            <label >Email</label> 
            <br/>
            <input type="email"placeholder=" Email Address"/>
           <br/><br/>
           <input class="btn btn-primary" type="submit"/>
       
           </form>
        </div>
       </div>
    )
}