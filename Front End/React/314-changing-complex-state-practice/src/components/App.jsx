import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { name, value } = event.target;
    setContact((oldContact) => {
      return ({ ...oldContact, [name]: value });
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateContact} />
        <input name="lName" placeholder="Last Name" onChange={updateContact} />
        <input name="email" placeholder="Email" onChange={updateContact} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
