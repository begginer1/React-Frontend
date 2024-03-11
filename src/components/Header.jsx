import { Link } from 'react-router-dom'
import '../Css/Header.css'
import brandImage from '../images/brand.png'

export const Header=()=>
{
  
 
    return(
     
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
            <Link to='/Home' className="HoverEffect text"name ='Home'  >Home</Link>
          </li>
          <li className=" text">
            <Link to='/' className="HoverEffect text" name='Register' >Register a Crime</Link>
          </li>
          <li className="text">
            <Link to='/Dashboard' className="HoverEffect text">Dashboard</Link>
          </li>

        </ul>
      
    
        <span className="button">
          <div>
        <button className="btn btn-warning text" ><Link to='/SignIn'>Login</Link></button>
        </div>
        <div>
        <button className="btn btn-warning text"  ><Link to='/SignUp'>SignUp</Link></button>
        </div>
      </span>
      </div> 
    </div>
  </nav>
</header>
    )
}