import * as React from "react";

const PalPhrase = (props) => {
    console.log(props);
    return <span style={{ fontStyle: "italic" }}>{props.children}</span>;
};

export default PalPhrase;
