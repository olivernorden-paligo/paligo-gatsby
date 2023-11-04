import * as React from "react";

const PalPara = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "rgb(255, 217, 151)",
                border: "1px solid orange",
            }}
        >
            {children}
        </div>
    );
};

export default PalPara;
