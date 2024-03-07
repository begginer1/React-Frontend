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
function App() {
  return (
    <div >
      {/* <Header/> */}
    {/* <Footer/> */}
     {/* <HomePage/> */}
   {/* <UserDashboard/> */}
   {/* <OfficerDashboard/> */}
   <StationHeadDashboard/>
   {/* <Table/> */}
   {/* <MyForm/> */}
   {/* <IncidentTypeComponent/> */}
    </div>
  );
}

export default App;
