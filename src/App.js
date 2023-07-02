
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './comonents/navbar/CustomNavbar'
import Login from './comonents/pages/Login';
import Base from './comonents/pages/Base';
function App() {
  return (
    <div className="temp">
       <Base>
       <Login></Login>
       </Base>
    </div>
  );
}

export default App;
