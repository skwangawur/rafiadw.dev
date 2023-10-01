import * as React from "react";
import "./App.css";
import RoutesLink from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

import Meta from "./components/Meta";

function App() {
    React.useEffect(() => {
        console.log("   /\\_/\\  ");
        console.log("  ( o.o ) ");
        console.log("   > ^ <  ");
    }, []);

    return (
        <Meta>
            <BrowserRouter>
                <RoutesLink />
            </BrowserRouter>
        </Meta>
    );
}

export default App;
