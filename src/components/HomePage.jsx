import brandImage from '../images/brand.png'
import '../Css/HomePage.css'
import { Header } from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { createContext, useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthProvider';
export function  HomePage()
{ 
    return (
      <div>
        <Header />
      <div className="HomeImageContainer" >
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/05/24/15/cyber-crime-police.jpg" alt='images not loaded' height="100%" width="100%" />
      </div>
      <div className='container-fluid'>
      <div className="row mt-4 ">
      <div className="col-xl-3 ">
      <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://pandc.stanmorepublicschool.com.au/wp-content/uploads/2021/11/lost-and-found-lrg.jpeg" width="140" height="140"  />
        <h3>Lost Property</h3>
        </div>
        
        <p className='CrimeInfo'>Property Which Cannot Be Located Does Not Include Property That You Think Was Taken From Your Possession. Example: Forgetting a Package On The Subway</p>
        <p className='Register'><Link to='/LostProperty' className="btn btn-secondary">Register</Link></p>
     
      </div>
      <div className="col-xl-3">
      <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BfZwFBhVYvlma3FgJa6zDgX7BysQUghPDw&usqp=CAU" width="140" height="140"/>
        <h3>Criminal Mischief</h3>
       </div>
       <div >
        <p className='CrimeInfo'>Intentional Damage To Property By A Person Example:Intentionally Breaking A Car Window Purposely OR Recklessly Causes Another To Suffer Pecuniary Loss By Deception OR Threat.</p>
        <p className='Register  '><Link to='/Mischief'className="btn btn-secondary" href="#">Register</Link></p>
        </div>
      </div>
      <div className="col-xl-3">
      <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://thedefenders.net/wp-content/uploads/2023/06/man-inside-grocery-putting-something-in-jacket-pocket.jpeg"width="140" height="140"  />
        <h3 >Petit Lacency</h3>
        </div>
        <div >
        <p className='CrimeInfo'>Property That Was Taken Without Permission Valued at Rs.1000 OR Less. Does Not Include Property That Was Forcibly Taken From You.
          Example: Bike being stolen IN front OF A store</p>
        <p className='Register'><Link to='/PetitLarency' className="btn btn-secondary">Register</Link></p>
      </div>
      </div>

      <div className="col-xl-3">
        <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nmmyasrAUuC7jOG_Co7gtIzP1npBR2zxlw&usqp=CAU"width="140" height="140"   />
        <h3  style={{alignSelf:'center'}}>Graffeti</h3>
        </div>
        <div>
        <p className='CrimeInfo'>Intentionally Drawing, Scratching, OR Etching ON Property. Example: Spray Painting A Store Front. If Reporting Graffiti, Upload A Picture OF Person Performing Graffiti</p>
        <p className='Register'><Link to='/Graffeti' className="btn btn-secondary" href="#">Register</Link></p>
        </div>
      </div>
      </div>
    </div>
    <div style={{position:'relative'}}>
    <div className="px-4 py-5 my-5 text-center About">
    <img className="d-block mx-auto mb-4" src={brandImage} alt="" height="20%"/>
    <h1 className="display-5 fw-bold text-body-emphasis">About</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Crime Management System (CMS) for a law
enforcement agency. This system  facilitate efficient management, tracking, and analysis of criminal
activities</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      </div>
    </div>
  </div>
  <Footer/>
      </div>
      </div>
  );
}