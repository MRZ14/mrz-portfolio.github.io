import { JSXElement, ParentComponent, ParentProps } from "solid-js";

type CardProps = ParentProps & {
    img: string;
    lang: string;
};

const Card: ParentComponent<CardProps> = (props): JSXElement => {
    return <></>;
};

export default Card;
