import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    nav,
    main,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
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
    return (
        <div className={container}>
            <header className={siteTitle}>
                {data.site.siteMetadata.title}
            </header>
            <nav className={nav}>
                <ul className={navLinks}>
                    {data.allPaligoPage.nodes.map((node) => (
                        <li key={node.id} className={navLinkItem}>
                            <Link to={node.slug} className={navLinkText}>
                                {node.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className={main}>{children}</main>
        </div>
    );
};

export default Layout;
