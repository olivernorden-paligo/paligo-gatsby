import * as React from "react";

const PalPara = (props) => {
    return <a href={props["xlink:href"]}>{props.children}</a>;
};

export default PalPara;
