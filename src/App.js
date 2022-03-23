import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Addprod from "./pages/addprod/Addprod";
import Dash from "./pages/dashboard/Dash";

function App() {
  const user = true;
  return (
<>
<Router>
  < Navbar />
  <Routes>
    <Route exact path="/" element={< Login />} />
    <Route path = "/dash" element = {user ? <Dash /> : <Login/>} />
    <Route path ="/add" element ={ < Addprod />} />
</Routes>
</Router>

</>
  );
}

export default App;
