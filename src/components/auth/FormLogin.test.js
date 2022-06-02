import "@testing-library/jest-dom";


describe("<FormLogin />", () => {
    test("should render correctly", () => {
        const { asFragment } = render(<FormLogin />);
        expect(asFragment()).toMatchSnapshot();
    });
}
);
