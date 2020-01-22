import React, { useState } from "react";

export const FormContext = React.createContext();

const DataForm = ({ children }) => {
    const [initFormData, setInitFormData] = useState({});
    return (
        <FormContext.Provider value={{ initFormData, setInitFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default DataForm;
