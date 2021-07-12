import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [details,setDetails] = useState({ ID: "", Name: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
            <div className="form-group">
                    <label htmlFor="ID">ID: </label>
                    <input type="ID" name="ID" id="emailID"onChange={e => setDetails({...details, ID: e.target.value})} value={details.ID} />
            </div>
            <div className ="form-group">
                    <label htmlFor="Name">Name:</label>
                    <input type="Name" name="Name" id="Name"onChange={e => setDetails({...details, Name: e.target.value})} value={details.Name}/>
                </div>
                <input type="submit" value="LOGIN" />
             </div>
        </form>
       
    )
}

export default LoginForm;