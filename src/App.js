import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (name==="" || email==="" || message==="") {
      toast.error("Please fill out all fields");
      return;
    }

    toast.success("Form submitted successfully");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="App">
      <Toaster position="top-center" />

      <form className="form" onSubmit={submitForm}>
        <h3 className="heading">FORM</h3>
        
        <div className="input-container">
          <label htmlFor="name" className="label">Name</label>
          <input type="text" id="name" className="input" required onChange={handleName} value={name} />
        </div>
        
        <div className="input-container">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" id="email" className="input" required onChange={handleEmail} value={email} />
        </div>
        
        <div className="input-container">
          <label htmlFor="message" className="label">Message</label>
          <textarea id="message" className="textarea" required onChange={handleMessage} value={message}></textarea>
        </div>
        
        <button type="submit" className="button" >Submit</button>
      </form>
    </div>
  );
}

export default App;
