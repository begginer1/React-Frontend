import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { HomePage } from './components/HomePage';
import UserDashboard from './components/UserDashboard';
import { IncidentTypeComponent } from './components/IncidentTypeComponent';
import MyForm from './components/form';
import Table from './components/IncidentTable';
import OfficerDashboard from './components/OfficerDashboard';
import StationHeadDashboard from './components/StationHeadDashboard';
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      {/* <BrowserRouter>
      <Routes>
          <Route path="/Home" index element={<HomePage />} />
          {/* <Route path="/Register a Crime" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> 
      </Routes>
      </BrowserRouter> */}
      {/* <Header/> */}
    {/* <Footer/> */}
     {/* <HomePage/> */}
   {/* <UserDashboard/> */}
   {/* <OfficerDashboard/> */}
   {/* <StationHeadDashboard/> */}
   {/* <Table/> */}
   {/* <MyForm/> */}
   {/* <IncidentTypeComponent/> */}
   {/* <SignInForm/> */}
   <SignUpForm/>
    </div>
  );
}

export default App;
