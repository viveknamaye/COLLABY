import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Landing from "./components/Landing/Landing";
import Profile from "./components/Profile/Profile";
import Singlefeed from "./components/Singlefeed/Singlefeed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./globalstate";
import IssuesForm from "./components/IssuesForm/IssuesForm";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/issuesform" element={<IssuesForm />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
