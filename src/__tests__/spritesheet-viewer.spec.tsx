import * as React from "react";
import renderer from "react-test-renderer";
import { SpritesheetViewer } from "../index";

describe("SpritesheetViewer", () => {
    it("executes a test", () => {
        expect(1).toBe(1);
    });

    it("renders correctly and matches the snapshot", () => {
        const symbols = [
            {
                id: "test-one",
            },
        ];
        const component = renderer.create(
            <SpritesheetViewer symbols={symbols} />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
