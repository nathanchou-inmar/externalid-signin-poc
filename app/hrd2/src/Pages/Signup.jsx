import { useState } from "react";

function Signup() {
    const [entries, setEntries] = useState({
        displayName: "",
        domain: "",
        endpoint: "",
        clientId: "",
        clientSecret: ""
    });

    function handleChange(e) {
        setEntries(values => ({...values, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEntries({
            displayName: "",
            domain: "",
            endpoint: "",
            clientId: "",
            clientSecret: ""
        })
        console.log("submitted");
    }
    return(
        <div>
            <p>Hi</p>
            <form onSubmit={handleSubmit}>
               <label> Display Name:
                <input
                    type="text"
                    name="displayName"
                    value={entries.displayName}
                    onChange={handleChange}
                    required
                />
               </label>
               <label> Domain:
                <input
                    type="text"
                    name="domain"
                    value={entries.domain}
                    onChange={handleChange}
                    required
                />
               </label>
               <label> Well-Known Endpoint:
                <input
                    type="text"
                    name="endpoint"
                    value={entries.endpoint}
                    onChange={handleChange}
                    required
                />
               </label>
               <label> Client Id:
                <input
                    type="text"
                    name="clientId"
                    value={entries.clientId}
                    onChange={handleChange}
                    required
                    />
                </label>
               <label> Client Secret:
                <input
                    type="text"
                    name="clientSecret"
                    value={entries.clientSecret}
                    onChange={handleChange}
                    required
                />
               </label>
               <input type="submit"></input>
            </form>
        </div>
    )
}

export default Signup;