import * as React from "react";
import { SpritesheetViewer } from "../index";
import renderer from "react-test-renderer";

describe("SpritesheetViewer", () => {
    it("executes a test", () => {
        expect(1).toBe(1);
    });

    it("renders correctly and matches the snapshot", () => {
        const component = renderer.create(
            <SpritesheetViewer />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
