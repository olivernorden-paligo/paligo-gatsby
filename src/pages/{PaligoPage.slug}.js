import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import XmlToReact from "../components/xmlToReact";
import PalPara from "../components/palPara";
import { StringToJSX } from "../components/stringToJsx";

const PaligoPage = ({ data }) => {
    // const template = React.createElement("Fragment", {}, data.paligoPage.xml);
    return (
        <Layout pageTitle={data.paligoPage.title}>
            {/* <pal-para>test</pal-para> */}
            {/* <XmlToReact xml={template} /> */}
            {/* <XmlToReact xml="<PalPara>html test</PalPara>" /> */}
            {/* <StringToJSX domString={data.paligoPage.xml} />
            <PalPara>my test para</PalPara>
            <div id="xml"></div> */}
            <XmlToReact xml="<pal-para>html tests</pal-para><pal-phrase>phrase</pal-phrase>" />
            <XmlToReact xml={data.paligoPage.xml} />
        </Layout>
    );
};

export const Head = ({ data }) => <Seo title={data.paligoPage.title} />;

export const query = graphql`
    query ($id: String) {
        paligoPage(id: { eq: $id }) {
            title
            xml
        }
    }
`;

export default PaligoPage;
