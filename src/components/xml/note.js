import * as React from "react";

const PalPara = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "lightyellow",
                border: "1px solid yellow",
            }}
        >
            {children}
        </div>
    );
};

export default PalPara;
