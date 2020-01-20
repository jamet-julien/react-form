import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./index.js";

const Testing = () => (
    <Tabs>
        <Tabs.Link filter="1">#1</Tabs.Link>
        <Tabs.Link filter="2">#2</Tabs.Link>

        <Tabs.Panel filter="1">content #1</Tabs.Panel>
        <Tabs.Panel filter="2">content #2</Tabs.Panel>
    </Tabs>
);

test("Change Tabs on click", () => {
    const { container, queryByText } = render(<Testing />);

    expect(container).not.toHaveTextContent("#1#2content #1");
    expect(container).toHaveTextContent("#1#2content #2");

    fireEvent.click(queryByText("#1"));

    expect(container).toHaveTextContent("#1#2content #1");
    expect(container).not.toHaveTextContent("#1#2content #2");
});
