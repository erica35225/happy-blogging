import CustomNavbar from "../navbar/CustomNavbar"
import Footer from "./Footer"

const Base = ({children}) => {
    return <div><CustomNavbar/>
    {children}
  <Footer></Footer>
  </div>
};
export default Base;
