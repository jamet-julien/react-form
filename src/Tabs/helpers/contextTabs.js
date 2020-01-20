import React, { useState } from "react";

export const TabsContext = React.createContext();

const Tabs = ({ state, children }) => {
    const innerState = useState(null);
    const [activeName, setActiveName] = state || innerState;

    return (
        <TabsContext.Provider value={{ activeName, setActiveName }}>
            {children}
        </TabsContext.Provider>
    );
};

export default Tabs;
