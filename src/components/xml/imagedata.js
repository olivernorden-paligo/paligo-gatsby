import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";

const PalPara = (props) => {
    return (
        <img
            style={{ maxHeight: "500px", maxWidth: "500px" }}
            src={"/" + props["fileref"]}
            alt=""
        />
    );
};

export default PalPara;
