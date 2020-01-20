import React from "react";
import "./App.css";

import { Simple as Tabs } from "../Tabs/components";
import { Registration, Login } from "../Form/components";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

function App() {
    return (
        <div className="App">
            <Tabs>
                <Tabs.Link filter={LOGIN}>j'ai un compte</Tabs.Link>
                <Tabs.Link filter={REGISTER}>je n'ai pas de compte</Tabs.Link>

                <Tabs.Panel filter={LOGIN}>
                    <Login />
                </Tabs.Panel>
                <Tabs.Panel filter={REGISTER}>
                    <Registration />
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default App;
