import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter style={{ margin: 0 }}>
        <Layout />
    </BrowserRouter>,
    rootElement
);
