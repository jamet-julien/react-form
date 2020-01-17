import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ errors }) => {
    return (
        <span className="error-message">
            {errors.map((err, k) => (
                <span key={k} className="error-item">
                    {err}
                </span>
            ))}
        </span>
    );
};

export default ErrorMessage;
