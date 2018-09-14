import * as React from "react";
import { SvgSymbol } from "./svg-symbol";

interface ISpritesheetViewerProps {
    symbols: any[];
}

export const SpritesheetViewer: React.SFC<ISpritesheetViewerProps> = (props) => {
    const { symbols } = props;

    return (
        <section>
            {symbols && symbols.map((sym) => <SvgSymbol id={sym.id} />)}
        </section>
    );
};
