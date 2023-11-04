import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import XmlToReact from "../components/xmlToReact";
import "../app.css";

const PaligoPage = ({ data }) => {
    return (
        <Layout pageTitle={data.paligoPage.title}>
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
