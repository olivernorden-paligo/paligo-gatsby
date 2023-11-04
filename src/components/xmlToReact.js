import * as React from "react";
import PalPara from "../components/palPara";
import PalPhrase from "../components/palPhrase";
import parse, { domToReact } from "html-react-parser";
import { Fragment } from "react";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";

const XmlToReact = (props) => {
    const xmlComponents = {
        "pal-para": PalPara,
        "pal-phrase": PalPhrase,
    };

    let transformed = parse(props.xml, {
        lowerCaseTags: false,
        transform(reactNode, domNode, index) {
            if (xmlComponents[reactNode.type]) {
                console.log("xmlComponents");
                return React.createElement(
                    xmlComponents[reactNode.type],
                    reactNode.props,
                    reactNode
                );
            }
            return reactNode;
        },
    });

    return transformed;
};

export default XmlToReact;
