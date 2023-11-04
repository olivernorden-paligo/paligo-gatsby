import * as React from "react";
import PalPara from "./xml/palPara";
import PalPhrase from "./xml/palPhrase";
import PalTitle from "./xml/palTitle";
import PalSubtitle from "./xml/subtitle";
import PalLink from "./xml/link";
import PalXref from "./xml/xref";
import PalItemizedlist from "./xml/itemizedlist";
import PalProcedure from "./xml/procedure";
import PalListitem from "./xml/listitem";
import PalStep from "./xml/step";
import PalMediaobject from "./xml/mediaobject";
import PalInlinemediaobject from "./xml/inlinemediaobject";
import PalImageobject from "./xml/imageobject";
import PalImagedata from "./xml/imagedata";
import PalVideoobject from "./xml/videoobject";
import PalVideodata from "./xml/videodata";
import PalEmphasis from "./xml/emphasis";
import PalTip from "./xml/tip";
import PalSection from "./xml/section";
import PalNote from "./xml/note";
import PalAlt from "./xml/alt";
import PalWarning from "./xml/warning";
import PalCaution from "./xml/caution";
import PalImportant from "./xml/important";
import PalInformalfigure from "./xml/informalfigure";
import PalSidebar from "./xml/sidebar";
import PalInformaltable from "./xml/informaltable";
import PalGuilabel from "./xml/guilabel";
import PalProgramlisting from "./xml/programlisting";
import PalBridgehead from "./xml/bridgehead";
import PalCaption from "./xml/caption";
import PalIndexterm from "./xml/indexterm";
import PalPrimary from "./xml/primary";
import PalSecondary from "./xml/secondary";
import PalSee from "./xml/see";
import PallSeealso from "./xml/seealso";
import PalFootnote from "./xml/footnote";
import PalVolumenum from "./xml/volumenum";
import PalPubdate from "./xml/pubdate";
import PalCopyright from "./xml/copyright";
import PalLegalnotice from "./xml/legalnotice";
import PalAbstract from "./xml/abstract";
import PalHolder from "./xml/holder";
import PalYear from "./xml/year";
import PalInfo from "./xml/info";
import parse from "html-react-parser";

const XmlToReact = (props) => {
    const xmlComponents = {
        "pal-para": PalPara,
        "pal-phrase": PalPhrase,
        "pal-title": PalTitle,
        "pal-subtitle": PalSubtitle,
        "pal-link": PalLink,
        "pal-xref": PalXref,
        "pal-itemizedlist": PalItemizedlist,
        "pal-procedure": PalProcedure,
        "pal-listitem": PalListitem,
        "pal-step": PalStep,
        "pal-mediaobject": PalMediaobject,
        "pal-inlinemediaobject": PalInlinemediaobject,
        "pal-imageobject": PalImageobject,
        "pal-imagedata": PalImagedata,
        "pal-videoobject": PalVideoobject,
        "pal-videodata": PalVideodata,
        "pal-emphasis": PalEmphasis,
        "pal-tip": PalTip,
        "pal-section": PalSection,
        "pal-note": PalNote,
        "pal-alt": PalAlt,
        "pal-warning": PalWarning,
        "pal-caution": PalCaution,
        "pal-important": PalImportant,
        "pal-informalfigure": PalInformalfigure,
        "pal-sidebar": PalSidebar,
        "pal-informaltable": PalInformaltable,
        "pal-guilabel": PalGuilabel,
        "pal-programlisting": PalProgramlisting,
        "pal-bridgehead": PalBridgehead,
        "pal-caption": PalCaption,
        "pal-indexterm": PalIndexterm,
        "pal-primary": PalPrimary,
        "pal-secondary": PalSecondary,
        "pal-see": PalSee,
        "pal-seealso": PallSeealso,
        "pal-footnote": PalFootnote,
        "pal-volumenum": PalVolumenum,
        "pal-pubdate": PalPubdate,
        "pal-copyright": PalCopyright,
        "pal-year": PalYear,
        "pal-legalnotice": PalLegalnotice,
        "pal-abstract": PalAbstract,
        "pal-holder": PalHolder,
        info: PalInfo,
    };

    let transformed = parse(props.xml, {
        lowerCaseTags: false,
        transform(reactNode, domNode, index) {
            if (xmlComponents[reactNode.type]) {
                return React.createElement(
                    xmlComponents[reactNode.type],
                    { ...reactNode.props, key: Math.random() },
                    reactNode
                );
            } else if (reactNode.type && reactNode.type.indexOf("pal-") === 0) {
                console.error("No component for " + reactNode.type);
            }
            return reactNode;
        },
    });

    return transformed;
};

export default XmlToReact;
