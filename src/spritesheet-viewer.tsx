import * as React from "react";

interface ISpritesheetViewerProps {

}

interface ISpritesheetViewerState {

}

export class SpritesheetViewer extends React.Component<ISpritesheetViewerProps, ISpritesheetViewerState> {
    constructor(props: ISpritesheetViewerProps) {
        super(props);
    }

    public render() {
        return <h1>Hello World</h1>;
    }
}
