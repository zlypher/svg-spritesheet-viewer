import * as React from "react";

interface ISvgSymbolProps {
    id: string;
}

export const SvgSymbol: React.SFC<ISvgSymbolProps> = (props) => {
    const { id } = props;

    return (
        <div>
            <svg><use xlinkHref={`#${id}`} /></svg>
            <span>{id}</span>
        </div>
    )
};
