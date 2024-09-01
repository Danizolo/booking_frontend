/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 13/07/2024 - 19:13:24
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 13/07/2024
 * - Author          : DHANUSH
 * - Modification    :
 **/
import "./App.css";
import { Routes,Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Views/Users/UserConsole/Dashboard";
import AdminIntercityBuses from "./Views/Admin/AdminConsole/IntercityBus/IntercityBuses";

function App() { 
  return (
    <div className="App">
      <Routes>
        {/* <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />

        </Route> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/intercity-buses" element={<AdminIntercityBuses />} />


      </Routes>
    </div>
  );
}

export default App;
