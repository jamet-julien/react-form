import React from "react";

import TabsData from "../../helpers/contextTabs";
import { useLinkState, usePanelState } from "../../helpers/useTabs";

import "./SimpleTabs.css";

const className = isActive => "tabs_link " + (isActive ? "actif" : "");

const Link = ({ filter, children }) => {
    const { onClick, isActive } = useLinkState({ filter });
    return (
        <div onClick={onClick} className={className(isActive)}>
            {children}
        </div>
    );
};

const Panel = ({ filter, children }) => {
    const { isActive } = usePanelState({ filter });
    return isActive ? <div className="tabs_panel">{children}</div> : null;
};

const SimpleTabs = ({ children, ...props }) => {
    return (
        <TabsData {...props}>
            <div className="tabs">{children}</div>
        </TabsData>
    );
};

SimpleTabs.Link = Link;
SimpleTabs.Panel = Panel;

export default SimpleTabs;
