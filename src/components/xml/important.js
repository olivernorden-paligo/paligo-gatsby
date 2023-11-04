import * as React from "react";

const PalPara = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "pink",
                border: "1px solid red",
                fontWeight: "bold",
            }}
        >
            {children}
        </div>
    );
};

export default PalPara;
