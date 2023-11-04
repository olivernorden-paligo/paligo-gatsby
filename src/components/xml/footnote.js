import * as React from "react";
import { tooltiptext, tooltip } from "./footnote.module.css";

const PalPara = ({ children }) => {
    return (
        <div className={tooltip}>
            [note]
            <span className={tooltiptext}>{children}</span>
        </div>
    );
};

export default PalPara;
