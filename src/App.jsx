import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import FindMentor from "./pages/findMentor/findMentor.jsx";
import About from "./pages/about/about.jsx";
import Form from "./components/form.jsx";
import ContactUs from './pages/contactUs/contactUs.jsx'
import Price from "./pages/price/price.jsx";
import SignUp from "./pages/signUp/signUp.jsx";
import Login from "./pages/login/login.jsx";
import Home from "./pages/home/home";
import "./App.css";
import BookMentor from "./pages/bookMentor/bookMentor.jsx";
import Notification from "./pages/notification/notification.jsx";
import Spinner from "./components/spinner.jsx";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/protectedRoutes.jsx";
import Logout from "./pages/logout/logout.jsx";
import ApplyMentor from "./pages/applyMentor/applyMentor.jsx";
import Users from "./pages/users/users.jsx";
import Mentors from "./pages/mentors/mentors.jsx";
import MentorProfile from "./pages/mentorProfile/mentorProfile.jsx";
import BookingPage from "./pages/bookingPage/bookingPage.jsx";
import Appointments from "./pages/appointments/appointments.jsx";
import MentorAppointments from "./pages/mentorAppointments/mentorAppointments.jsx";
import EmailVerify from "./pages/emailVerify/emailVerify.jsx";
import MentorDetails from "./pages/mentorDetails/mentorDetails.jsx";
import AdminAppointments from "./pages/adminAppointments/adminAppointments.jsx";
import Lobby from "./pages/lobby/lobby.jsx";
import Room from "./pages/room/room.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import RatingComponent from "./pages/customerRating/customerRating.jsx";
import PaymentSuccess from "./pages/paymentSuccess/paymentSuccess.jsx";

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
            <Route path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/about" element={<About />}>
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
            <Route path="/contactUs" element={<ContactUs/>} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />

            <Route path="/rating/:postId" element={<RatingComponent/>}/>
              
            <Route path="/resources" /> 
            {/* <Route path="/post/:postId"  element={<Post/>}/>  No disccussion hence scrapped  */}  
            <Route path="/price" element={<Price />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
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
            />{" "}
            <Route
              path="/notification"
              element={
                <ProtectedRoutes>
                  <Notification />
                </ProtectedRoutes>
              }
            />
            
            <Route
              path="/admin/users"
              element={
                <ProtectedRoutes>
                  <Users />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/appointments"
              element={
                <ProtectedRoutes>
                  <AdminAppointments />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/mentors"
              element={
                <ProtectedRoutes>
                  <Mentors />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/mentor/profile/:id"
              element={
                <ProtectedRoutes>
                  <MentorProfile />
                </ProtectedRoutes>
              }
            />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/mentorDetails/:userId" element={<MentorDetails />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/findMentor/:id"
              element={
                <ProtectedRoutes>
                  <Price />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/mentor/appointment/:mentorId"
              element={
                <ProtectedRoutes>
                  <BookingPage />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/applyMentor"
              element={
                <ProtectedRoutes>
                  <ApplyMentor />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoutes>
                  <Appointments />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/mentorAppointments"
              element={
                <ProtectedRoutes>
                  <MentorAppointments />
                </ProtectedRoutes>
              }
            />
            <Route path="/lobby" element={<Lobby />} />
            <Route
              path="/room/:roomId"
              element={
                <ProtectedRoutes>
                  <Room />
                </ProtectedRoutes>
              }
            />
            {/* <Route path="/test" element={<Test/>}></Route> */}
            

            <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
            <Route path="*" />

          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
