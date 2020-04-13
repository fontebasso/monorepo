import React from "react";

interface PropsHello {
    name?: string;
}

const Hello = (props: PropsHello)  => {
    return <>
        Hello {props.name}
    </>;
};

Hello.defaultProps = {
    name: "World"
};

export default Hello;
