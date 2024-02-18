import * as React from "react";
import "./App.css";
import RoutesLink from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "@code-hike/mdx/dist/index.css";
import ReactGA4 from "react-ga4";
const TRACKING_ID = "G-1J5FEYGH9L";
import Meta from "./components/Meta";

ReactGA4.initialize(TRACKING_ID);

function App() {
    React.useEffect(() => {
        console.log("   /\\_/\\  ");
        console.log("  ( o.o ) ");
        console.log("   > ^ <  ");
    }, []);

    React.useEffect(() => {
        ReactGA4.event({
            category: "test category",
            action: "test action",
            label: window.location.pathname,
        });

        ReactGA4.send({
            hitType: "pageview",
            page: window.location.pathname,
            title: "Custom Title",
        });

        console.log(window.location.pathname);
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
