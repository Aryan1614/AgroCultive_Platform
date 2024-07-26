import { Routes,Route } from 'react-router-dom';
import OpenRoute from "./components/core/Auth/OpenRoute"
import './App.css'
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OtpVerfiy from './pages/OtpVerfiy';
import Profile from './pages/Profile';
import LoansPrediction from './pages/LoansPrediction';
import CropRecommendation from './pages/CropRecommendation';
import FinancialLiteracy from './pages/FinancialLiteracy';
import FertilizerRecommendation from './pages/FertilizerRecomendation';

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Navbar /> 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route
          path="verifyOtp"
          element={
            <OpenRoute>
              <OtpVerfiy />
            </OpenRoute>
          }
        />
        <Route path='/profile' element={<Profile/>} />

        <Route path='/dashboard/loans' element={<LoansPrediction/>} />
        <Route path='/dashboard/croprecommendation' element={<CropRecommendation/>} />
        <Route path='/dashboard/financialliteracy' element={<FinancialLiteracy/>} />
        <Route path='/dashboard/fertilizerguidence' element={<FertilizerRecommendation/>} />
      </Routes>
    </div>
  );
}

export default App;
