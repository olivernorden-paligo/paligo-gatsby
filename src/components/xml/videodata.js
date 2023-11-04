import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";

const PalPara = (props) => {
    return (
        <iframe
            width="560"
            height="315"
            src={props["fileref"]}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
};

export default PalPara;
