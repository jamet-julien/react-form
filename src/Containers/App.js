import React from "react";
import RegistrationForm from "../Form/components/RegistrationForm";
import LoginForm from "../Form/components/LoginForm";
import "./App.css";

function App() {
    return (
        <div className="App">
            <RegistrationForm />
            <LoginForm />
        </div>
    );
}

export default App;
