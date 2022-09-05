import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

describe('About component', () => {
    // render About test
    // - first test
    it('renders', () => {
        render(<About/>);
    })
    // - second test
    it('matches snapshot DOM node structure', () => {
        // asFragment returns component snapshot
        const { asFragment } = render(<About/>);
        // tests whether expected and actual outcomes match
        // enter u in cli to update snapshot if component has been updated since last test
        expect(asFragment()).toMatchSnapshot();
    })
})
afterEach(cleanup);