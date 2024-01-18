import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

// Show an error message if the password is less than 8 characters long and the user has interacted with the input at least once.
// The error message should be displayed below the password input as follows.
const PasswordErrorMessage = ({isTouched, password}) => {
  if (isTouched && password.length < 8) {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  }
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (password.value.length >= 8 && firstName && lastName && validateEmail(email) && role !== "role");
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input 
              placeholder="First name"
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input 
              placeholder="Last name"   
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
              placeholder="Email address" 
              onChange={e => setEmail(e.target.value)}  
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword({value: e.target.value, isTouched: true})} 
              
            />
            <PasswordErrorMessage password={password.value} isTouched={password.isTouched}/>
            {/* {password.length < 8 ? PasswordErrorMessage() : null} */}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
