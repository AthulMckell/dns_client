import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Addprod from "./pages/addprod/Addprod";
import Dash from "./pages/dashboard/Dash";

function App() {
  return (
<>
<Router>
  < Navbar />
  <Routes>
    <Route path="/" element={< Login />} />
    <Route path ="/add" element ={ < Addprod />} />
    <Route path = "/dash" element = { <Dash />} />
    
  </Routes>
</Router>

</>
  );
}

export default App;
