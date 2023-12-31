import * as React from "react";
import { Link } from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";

const PalPara = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            allPaligoPage {
                nodes {
                    id
                    slug
                    title
                    uid
                }
            }
        }
    `);

    const getLink = () => {
        let uid = props["xlink:href"];
        if (!uid) {
            return "";
        }
        uid = uid.replace("#", "");

        const page = data.allPaligoPage.nodes.find((node) => {
            return uid === node.uid;
        });

        if (!page) {
            return uid;
        }

        return page.slug;
    };
    let link = getLink();

    return <Link to={link}>{props.children}</Link>;
};

export default PalPara;
