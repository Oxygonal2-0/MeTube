import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./inner/dashboard";
import Watch from "./inner/watch";
import ForgotPassword from "./outer/forgotPassword";
import Login from "./outer/login";
import Registration from "./outer/register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/watch" element={<Watch/>} />
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;
