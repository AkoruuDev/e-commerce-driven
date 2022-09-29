import { useState } from "react";

import GlobalStyle from "../style/globalStyle";

import Main from "./Main";
import Aside from "./Aside";

export default function App() {
    const [shop, setShop] = useState([]);

    return(
        <>
            <GlobalStyle />
            <Main setShop={setShop} shop={shop} />
            <Aside setShop={setShop} shop={shop} />
        </>
    )
}