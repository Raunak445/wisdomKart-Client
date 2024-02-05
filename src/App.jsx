import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import FindMentor from "./pages/findMentor/findMentor.jsx";
import About from "./pages/about/about.jsx";
import Form from "./components/form.jsx";
import ContactUs from "./pages/contactUs/contactUs.jsx";
import Price from "./pages/price/price.jsx";
import SignUp from "./pages/signUp/signUp.jsx";
import Login from "./pages/login/login.jsx";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile.jsx";
import "./App.css";
import BookMentor from "./pages/bookMentor/bookMentor.jsx";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./components/spinner.jsx";
import { useSelector } from "react-redux";

import ProtectedRoutes from "./components/protectedRoutes.jsx";
import Logout from "./pages/logout/logout.jsx";
import ApplyMentor from "./pages/applyMentor/applyMentor.jsx";

function App() {
  const { loading } = useSelector((state) => {
    return state.alerts;
  });

  const placeholder =
    "I am looking for advice to reduce Inventory in my Restaurant business. Some times I face stock out situations at the same time the overall cost of inventory is very high . I have a chain of QSR restaurants in Bangalore";

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
               
                  <Home />
              
              }
            >
              Home
            </Route>
            <Route
              path="/about"
              element={
               
                  <About />
              
              }
            >
              About Us
            </Route>

            <Route
              path="/findMentor"
              element={
                <ProtectedRoutes>
                  <FindMentor />
                </ProtectedRoutes>
              }
            >
              Find a Mentor
            </Route>
            <Route path="/courses" />
            <Route path="/liveSessions" />
            <Route path="/caseStudies" />
            <Route
              path="/contactUs"
              element={
                
                  <ContactUs />
              
              }
            />
            <Route path="/dashboard" />
            <Route path="/resources" />
            <Route path="/price" element={<Price />} />
            <Route path="/logout" element={<Logout/>} />
            <Route
              path="/help"
              element={
                <Form
                  name="Help me Find a Mentor"
                  disable="true"
                  placeholder={placeholder}
                />
              }
            />

            <Route
              path="/bookMentor"
              element={
                <ProtectedRoutes>
                  <BookMentor />
                </ProtectedRoutes>
              }
            ></Route>

            <Route
              path="/signUp"
              element={
            
                  <SignUp />
            
              }
            />
            <Route
              path="/login"
              element={
               
                  <Login />
              
              }
            />
            <Route
              path="/findMentor/:mentor"
              element={
                <ProtectedRoutes>
                  <Price />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/findMentor/profile/:mentor"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route path="/applyMentor" element={<ApplyMentor/>}/>
            <Route path="*" />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
