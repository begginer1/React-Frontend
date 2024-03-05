import '../Css/Footer.css'
export default function Footer()
{
return(
    <div  className='FooterContainer mt-5'>
  <footer >
    <ul className="nav justify-content-center border-bottom  ">
      <li className="text"><a   className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="text "><a   className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="text "><a   className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className=" text"><a   className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <div className='companyName pt-3 mt-3'>
    <p className="text-center text-body-secondary text parent">© 2024 Company, Inc</p>
    </div>
  </footer>
</div>
)
}