import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import RootLayout from './layout';

describe('RootLayout tests', () => {
    it('has a div with classname demo-class"', () => {
        const { container } = render(<RootLayout value={30} />);
        const div = container.getElementsByClassName("demo-class");
        expect(div.length).toBe(1);
    });
});