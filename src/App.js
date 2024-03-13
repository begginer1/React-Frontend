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
import { TokenProvider } from './components/service/AuthProvider';

function App() 
{ 
  return (
    <div>
     
   {/* <Routes> 
    <Route path="/" element={<HomePage />} />
   <Route path="/SignUp" element={<SignUpForm />} />
          <Route path="/SignIn" index element={<SignInForm />} /> 
          </Routes> */}
         
         
         
       <Routes>
          <Route path="/home" element={<HomePage />} />   
          <Route path="/Dashboard" element={<UserDashboard/>} /> 
          <Route path="/Mischief" element={<CriminalMischeifForm/>} /> 
          <Route path="/Graffeti" element={<GraffetiForm/>} /> 
          <Route path="/PetitLarency" element={<PetitLarencyForm/>} /> 
          <Route path="/LostProperty" element={<LostPropertyForm/>} /> 
          <Route path="/RegisterUser"element={<RegisterUserForm/>}/>
          <Route path="*" element={<SignInForm/>}/>
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
