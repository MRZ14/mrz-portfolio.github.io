import { JSXElement, ParentComponent, ParentProps } from "solid-js";

type CardProps = ParentProps & {
    img: string;
    imgAlt: string;
    lang: string;
};

const Card: ParentComponent<CardProps> = (props): JSXElement => {
    return (
        <>
            <section class="flex flex-col md:flex-row">
                <span>
                    <img src={props.img} alt={props.imgAlt} />
                </span>
                <section>{props.children}</section>
            </section>
        </>
    );
};

export default Card;
