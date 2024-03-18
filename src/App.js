import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { HomePage } from './components/HomePage';
import UserDashboard from './components/UserDashboard';
import { IncidentTypeComponent } from './components/IncidentTypeComponent';
import Table from './components/IncidentTable';
import OfficerDashboard from './components/OfficerDashboard';
import {CriminalMischeifForm} from './components/CriminalMischeifForm';
import {PetitLarencyForm} from './components/PetitLarencyForm';
import {GraffetiForm} from './components/GraffetiForm';
import {LostPropertyForm} from './components/LostPropertyFrom';
import StationHeadDashboard from './components/StationHeadDashboard';
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterUserForm } from './components/RegisterUserForm';
import { TokenProvider } from './components/context/AuthProvider';
import { Dashboard } from './components/DashBoard';
import {RegisterOfficerForm} from "./components/RegisterOfficerForm"
import {AssignOfficer} from "./components/AssignOfficer"
import Report from './components/DownloadReport';
import DownloadReport from './components/DownloadReport';
import 'react-toastify/dist/ReactToastify.css';
import { RequireAuth } from './components/RequireAuth';
function App() 
{ 
  return (
    <div>
     
   {/* <Routes> 
    <Route path="/" element={<HomePage />} />
   
          <Route path="/SignIn" index element={<SignInForm />} /> 
          </Routes> */}
         
         
         
       <Routes>
          <Route path="/home" element={<HomePage />} /> 
          <Route path="*" element={<HomePage />} />
          <Route path="SignIn" element={<SignInForm/>}/>
          <Route path="/SignUp" element={<SignUpForm />} /> 

          
          <Route element={<RequireAuth/>} >  
          <Route path="/Dashboard" element={<Dashboard/>} /> 
          <Route path="/UserDashboard" element={<UserDashboard/>} /> 
          <Route path="/OfficerDashboard" element={<OfficerDashboard/>} /> 
          <Route path="/SationHeadDashboard" element={<StationHeadDashboard/>} /> 
          <Route path="/Mischief" element={<CriminalMischeifForm/>} /> 
          <Route path="/Graffeti" element={<GraffetiForm/>} /> 
          <Route path="/PetitLarency" element={<PetitLarencyForm/>} /> 
          <Route path="/LostProperty" element={<LostPropertyForm/>} /> 
          <Route path="/RegisterUser"element={<RegisterUserForm/>}/>
          <Route path="/RegisterOfficerForm"element={<RegisterOfficerForm/>}/>
          <Route path="/AssignOfficer" element={<AssignOfficer/>} />
          <Route path="/downloadReport" element={<DownloadReport/>} />
          </Route>
         
      </Routes> 
     

    
   {/* <OfficerDashboard/> */}
   {/* <StationHeadDashboard/> */}
   {/* <Table/> */}
   {/* <MyForm/> */}
   {/* <IncidentTypeComponent/> */}
   {/* <SignInForm/> */}
   {/* <CriminalMischeifForm/> */}
   
  
   {/* <SignUpForm/> */}

    </div>
  );
}

export default App;
