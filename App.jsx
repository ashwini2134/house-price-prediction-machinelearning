import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Auth from './pages/Auth';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/jobs/:id' element={<JobDetail/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/employer' element={<EmployerDashboard/>} />
        <Route path='/candidate' element={<CandidateDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}