import { useContext, useCallback, useEffect, useMemo } from "react";

import { TabsContext } from "./contextTabs";

export const useLinkState = ({ filter }) => {
    const { activeName, setActiveName } = useContext(TabsContext);

    useEffect(() => {
        if (activeName === null) setActiveName(filter);
    }, [activeName, setActiveName, filter]);

    const isActive = useMemo(() => activeName === filter, [activeName, filter]);

    const onClick = useCallback(() => {
        setActiveName(() => filter);
    }, [filter, setActiveName]);

    return {
        onClick,
        isActive
    };
};

export const usePanelState = ({ filter }) => {
    const { activeName } = useContext(TabsContext);
    const isActive = useMemo(() => activeName === filter, [activeName, filter]);
    return {
        isActive
    };
};
