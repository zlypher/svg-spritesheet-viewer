import * as React from "react";
import { SvgSymbol } from "../index";
import renderer from "react-test-renderer";

describe("SvgSymbol", () => {
    it("renders correctly and matches the snapshot", () => {
        const component = renderer.create(
            <SvgSymbol id="test-one" />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
