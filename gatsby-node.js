exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { JSDOM } = require("jsdom");
    const { readFileSync } = require("fs");

    let pub = readFileSync(
        "./publication/pub/out/publication-37198--en.xml",
        "utf-8"
    );

    pub = pub
        .replaceAll("</informaltable", "</table")
        .replaceAll("<informaltable", "<table");

    const dom = new JSDOM(pub);

    let pages = [];

    let resourceIds = [];

    const convertPaligo = (nodeList) => {
        for (let el of nodeList) {
            if (el.children.length) {
                convertPaligo(el.children);
            }

            if (
                [
                    "TABLE",
                    "THEAD",
                    "TFOOT",
                    "TBODY",
                    "TR",
                    "TD",
                    "TH",
                    "COLGROUP",
                    "COL",
                ].includes(el.tagName)
            ) {
                continue;
            }

            let attrs = " ";
            for (const attr of el.attributes) {
                attrs += attr.name + '="' + attr.value + '" ';
            }
            el.outerHTML =
                "<pal-" +
                el.tagName +
                attrs +
                ">" +
                el.innerHTML +
                "</pal-" +
                el.tagName +
                ">";
        }
    };

    for (node of dom.window.document.querySelectorAll("article > section")) {
        const resourceId = node.getAttribute("xinfo:resource-id");
        const title = node.getAttribute("xinfo:resource-title");

        if (resourceIds.includes(resourceId)) {
            continue;
        }
        resourceIds.push(resourceId);
        convertPaligo(node.children);

        pages.push({
            slug: "/" + resourceId,
            uid: node.getAttribute("xml:id"),
            resourceId,
            title,
            // component: "./src/templates/PaligoPageTemplate.vue",
            xml: node.outerHTML,
        });
    }

    const article = dom.window.document.querySelector("article");
    const articleInfo = article.querySelector("info");
    convertPaligo(articleInfo.children);

    pages.unshift({
        slug: "/",
        uid: article.getAttribute("xml:id"),
        resourceId: article.getAttribute("xinfo:resource"),
        title: article.getAttribute("xinfo:resource-title"),
        // component: "./src/templates/PaligoIndexPageTemplate.vue",
        xml: articleInfo.outerHTML,
    });

    const { createNode } = actions;

    pages.forEach((page) => {
        const nodeContent = JSON.stringify(page);

        const nodeMeta = {
            id: createNodeId(`paligo-page-${page.uid}`),
            parent: null,
            children: [],
            internal: {
                type: `PaligoPage`,
                // mediaType: `text/html`,
                content: nodeContent,
                contentDigest: createContentDigest(page),
            },
        };

        const node = Object.assign({}, page, nodeMeta);
        createNode(node);
    });
};

exports.createPages = async function ({ actions, graphql }) {
    // const {JSDOM} = require('jsdom');
    // const { readFileSync } = require('fs')
    // let pub = readFileSync('./publication/out/publication-37198--en.xml', 'utf-8');
    // pub = pub.replaceAll('</informaltable', '</table').replaceAll('<informaltable', '<table');
    // const dom = new JSDOM(pub);
    // let pages = [];
    // let resourceIds = [];
    // const convertPaligo = (nodeList) => {
    //   for (let el of nodeList) {
    //     if (el.children.length) {
    //       convertPaligo(el.children);
    //     }
    //     if ([
    //       'TABLE',
    //       'THEAD',
    //       'TFOOT',
    //       'TBODY',
    //       'TR',
    //       'TD',
    //       'TH',
    //       'COLGROUP',
    //       'COL',
    //     ].includes(el.tagName)) {
    //       continue;
    //     };
    //     let attrs = ' ';
    //     for (const attr of el.attributes) {
    //       attrs += attr.name + '="' + attr.value + '" ';
    //     }
    //     el.outerHTML = "<vue-" + el.tagName + attrs + ">" + el.innerHTML + "</vue-" + el.tagName + ">";
    //   }
    // }
    // for (node of dom.window.document.querySelectorAll("article > section")) {
    //   const resourceId = node.getAttribute('xinfo:resource-id');
    //   const title = node.getAttribute('xinfo:resource-title');
    //   if (resourceIds.includes(resourceId)) {
    //     continue;
    //   }
    //   resourceIds.push(resourceId);
    //   convertPaligo(node.children);
    //   pages.unshift({
    //     path: '/' + resourceId,
    //     uid: node.getAttribute('xml:id'),
    //     resourceId,
    //     title,
    //     component: './src/templates/PaligoPageTemplate.vue',
    //     xml: node.outerHTML,
    //   })
    // }
    // const article = dom.window.document.querySelector("article");
    // const articleInfo = article.querySelector("info")
    // convertPaligo(articleInfo.children);
    // pages.push({
    //   path: '/',
    //   uid: article.getAttribute('xml:id'),
    //   resourceId: article.getAttribute('xinfo:resource'),
    //   title: article.getAttribute('xinfo:resource-title'),
    //   component: require.resolve(`./src/templates/page.js`),
    //   xml: articleInfo.outerHTML,
    // })
    // // const { data } = await graphql(`
    // //   query {
    // //     allMarkdownRemark {
    // //       edges {
    // //         node {
    // //           fields {
    // //             slug
    // //           }
    // //         }
    // //       }
    // //     }
    // //   }
    // // `);
    // pages.forEach(({path}) => {
    //   actions.createPage({
    //     path,
    //     component,
    //     context: { path },
    //   });
    // });
};
