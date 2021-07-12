import React, { useState } from 'react';
import LoginForm  from './components/LoginForm';
function App() {
  const adminUser = {
    ID: "admin@admin.com",
    Name : "admin123"
  }
  const [user, setUser] = useState({ ID: ""});
   const [error,setError] = useState("");

   const Login = details => {
     console.log(details);

     if (details.ID == adminUser.ID && details.Name == adminUser.Name){
       console.log("Logged in");
       setUser({
         /*name: details.name,*/
         ID: details.ID
       });
     } else {
       console.log("Details do not match!");
       setError("Details do not match!");
     }
   }
 
   const Logout = () => {
     setUser({  ID: ""});
   }
      
  return (
    <div className="App">
       {(user.ID !="") ? (
         <div className="welcome">
           <h2>Welcome to TDCX</h2>
           <button onClick={Logout}>Logout</button>
    </div>
    ) : (
       <LoginForm Login={Login} error={error}/>

    )}
  </div>

  );
}


export default App;
