import "./App.css";
import Homepage from "./Pages/homepage/Homepage";
import Navbar from "./components/NavBar/Navbar";
import VehiclesDrop from "./dropdowncomponets/vehicles/VehiclesDrop";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Homepage/>
      </BrowserRouter>
      {/* <VehiclesDrop/>      */}
    </div>
  );
}


export default App;
