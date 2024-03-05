import '../Css/Header.css'
import brandImage from '../images/brand.png'
export const Header=()=>
{
  function  optionHighlight()
  {
    
  }
    return(
      <>
    <header >
  <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-background ">
    <div className="container-fluid "> 
    <span className='items'>
    <img src={brandImage} height ="40px" className="brandimg"/>
      <li className="navbar text ms-2" >Crime Management System</li>
      </span>
      <div  className='items'>
        <ul className="items  mb-2 mb-md-0  mt-2 pb-2">
          <li className="text">
            <a  name ='Home' onClick={optionHighlight} >Home</a>
          </li>
          <li className=" text">
            <a  name='Register' onClick={optionHighlight} >Register a Crime</a>
          </li>
          <li className="text">
            <a  name='About' onClick={optionHighlight} >About</a>
          </li>

        </ul>
      
    
        <span className="button">
          <div>
        <button className="btn btn-warning text">Login</button>
        </div>
        <div>
        <button className="btn btn-warning text">SignUp</button>
        </div>
      </span>
      </div> 
    </div>
  </nav>
</header>

 
   </>
    )
}