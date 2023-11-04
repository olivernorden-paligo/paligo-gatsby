import * as React from "react";

const PalPara = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "lightblue",
                border: "1px solid blue",
            }}
        >
            {children}
        </div>
    );
};

export default PalPara;
