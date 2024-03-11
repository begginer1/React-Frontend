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
import { TokenContextProvider } from './components/TokenContext';
import { RegisterUserForm } from './components/RegisterUserForm';

function App() {
  return (
    <div >
      <TokenContextProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/Home" index element={<HomePage />} />
           {/* <Route path="/Register a Crime" element={<Blogs />} />  */}
          <Route path="/SignUp" element={<SignUpForm />} />
          <Route path="/SignIn" element={<SignInForm />} /> 
          <Route path="/Dashboard" element={<StationHeadDashboard/>} /> 
          <Route path="/Mischief" element={<CriminalMischeifForm/>} /> 
          <Route path="/Graffeti" element={<GraffetiForm/>} /> 
          <Route path="/PetitLarency" element={<PetitLarencyForm/>} /> 
          <Route path="/LostProperty" element={<LostPropertyForm/>} /> 
          <Route path="/RegisterUser"element={<RegisterUserForm/>}/>
      </Routes>
      </BrowserRouter>
      
    
   {/* <OfficerDashboard/> */}
   {/* <StationHeadDashboard/> */}
   {/* <Table/> */}
   {/* <MyForm/> */}
   {/* <IncidentTypeComponent/> */}
   {/* <SignInForm/> */}
   {/* <CriminalMischeifForm/> */}
   </TokenContextProvider>
  
   {/* <SignUpForm/> */}
    </div>
  );
}

export default App;
