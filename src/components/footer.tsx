import { Component, JSXElement } from "solid-js";

type FooterProps = {
    lang: string;
};

const Footer: Component<FooterProps> = (props): JSXElement => {
    if (props.lang === "id") {
        return <>Lang ID</>;
    } else {
        return <>Footer</>;
    }
};

export default Footer;
