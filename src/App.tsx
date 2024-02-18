import * as React from "react";
import "./App.css";
import RoutesLink from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "@code-hike/mdx/dist/index.css";
import ReactGA from "react-ga";
const TRACKING_ID = "G-1J5FEYGH9L";
import Meta from "./components/Meta";

ReactGA.initialize(TRACKING_ID);

function App() {
    React.useEffect(() => {
        console.log("   /\\_/\\  ");
        console.log("  ( o.o ) ");
        console.log("   > ^ <  ");
    }, []);

    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
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
