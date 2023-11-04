import * as React from "react";
import { heading } from "../layout.module.css";

const PalPara = ({ children }) => {
    return <h1 className={heading}>{children}</h1>;
};

export default PalPara;
