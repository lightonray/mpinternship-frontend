import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import EditUser from './components/EditUser';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthProvider';
import Logout from './components/Logout';
import CarDashboard from './components/CarDashboard';
import AddCar from './components/AddCar';
import CarDetails from './components/CarDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/login"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          />

          <Route
            path="/userdashboard"
            element={
              <AuthProvider>
                <PrivateRoute element={<UserDashboard />} />
              </AuthProvider>
            }
          />

          <Route
            path="/edit-user-information"
            element={
              <AuthProvider>
                <PrivateRoute element={<EditUser />} />
              </AuthProvider>
            }
          />

        <Route
            path="/cardashboard"
            element={
              <AuthProvider>
                <PrivateRoute element={<CarDashboard />} />
              </AuthProvider>
            }
          />

        <Route
            path="/addnewcar"
            element={
              <AuthProvider>
                <PrivateRoute element={<AddCar />} />
              </AuthProvider>
            }
          />

        <Route
          path="/cardetails/:carId"
          element={
            <AuthProvider>
              <PrivateRoute element={<CarDetails />} />
            </AuthProvider>
          }
        />

          <Route
            path="/logout"
            element={
              <AuthProvider>
                <PrivateRoute element={<Logout />} />
              </AuthProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
