import * as React from "react";
import renderer from "react-test-renderer";
import { SvgSymbol } from "../index";

describe("SvgSymbol", () => {
    it("renders correctly and matches the snapshot", () => {
        const component = renderer.create(
            <SvgSymbol id="test-one" />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
