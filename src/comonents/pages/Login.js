import Base from '../pages/Base';
import './Login.css'
const login = () => {
  return (
    <div className="temp2">
      
      <div className= "login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
          <form className= "login-form">
            <input type="text"
            placeholder="Username"/>

            <input type="text"
            placeholder="Password"/>

            <a href="#">Forgot your password?</a>
          <button>LOGIN</button>

          </form>
      </div>
    
    </div>
  );
};
export default login;