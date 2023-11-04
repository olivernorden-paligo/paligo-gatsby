import * as React from "react";

const PalPara = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "pink",
                border: "1px solid red",
            }}
        >
            {children}
        </div>
    );
};

export default PalPara;
