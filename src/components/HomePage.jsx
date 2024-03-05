import brandImage from '../images/brand.png'
import '../Css/HomePage.css'
import { Header } from './Header';
import Footer from './Footer';
export function  HomePage()
{
    return (
      <div>
        <Header/>
      <div className="HomeImageContainer">
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/05/24/15/cyber-crime-police.jpg" alt='images not loaded' height="100%" width="100%" />
      </div>
      <div className='container-fluid'>
      <div className="row mt-4 ">
      <div className="col-xl-3 ">
      <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://pandc.stanmorepublicschool.com.au/wp-content/uploads/2021/11/lost-and-found-lrg.jpeg" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" />
        <h3 >Lost Property</h3>
        <p className='CrimeInfo'>Property which cannot be located Does not include property that you think was taken from your possession. Example: forgetting a package on the subway</p>
        <p><a className="btn btn-secondary" href="#">Regsiter</a></p>
      </div>
      </div>
      <div className="col-xl-3">
      <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BfZwFBhVYvlma3FgJa6zDgX7BysQUghPDw&usqp=CAU" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice"  style={{border:'1px'}}/>
        <h2 className="fw-normal">Criminal Mischief</h2>
       </div>
       <div>
        <p className='CrimeInfo'>Intentional damage to property by a person Example:Intentionally breaking a car window</p>
        <p ><a className="btn btn-secondary" href="#">Register</a></p>
        </div>
      </div>
      <div className="col-xl-3">
      <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://thedefenders.net/wp-content/uploads/2023/06/man-inside-grocery-putting-something-in-jacket-pocket.jpeg"width="140" height="140" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" />
        <h2 className="fw-normal">Petit Lacency</h2>
        </div>
        <div>
        <p className='CrimeInfo'>Property that was taken without permission valued at Rs.1000 or less. Does not include property that was forcibly taken from you.
          Example: Bike being stolen in front of a store</p>
        <p ><a className="btn btn-secondary" href="#">Regsiter</a></p>
      </div>
      </div>

      <div className="col-xl-3">
        <div className='center'>
        <img className="bd-placeholder-img rounded-circle CrimeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nmmyasrAUuC7jOG_Co7gtIzP1npBR2zxlw&usqp=CAU"width="140" height="140" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" />
        <h2 className="fw-normal">Graffeti</h2>
        </div>
        <div>
        <p className='CrimeInfo'>Intentionally drawing, scratching, or etching on property. Example: Spray painting a store front. If reporting graffiti, upload a picture of graffiti.</p>
        <p ><a className="btn btn-secondary" href="#">Regsiter</a></p>
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
enforcement agency. The system should facilitate efficient management, tracking, and analysis of criminal
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