import {render, screen} from "@testing-library/react";
import {Message} from "../Message";

describe("Message", () => {
    it('renders passed text', () => {
        /*const { getByText } = */
        render(<Message text="Text" author="author" theme="dark" />);

        const text = screen.getByText("Text");
        // const text = component.getByText("fext"); // wrong for linter!
        expect(text).toBeDefined();
    });

    it('matches snapshot', () => {
        const component = render(
            <Message text="Text" author="author" theme="dark" />
        );

        expect(component).toMatchSnapshot();
    });
    // аккуратнее со снэпшотным тестированием (оно по сути мало что не проверяет): обязательно тестировать и функционал тоже!
    // аналогично queryBy..., findBy...
    // можно передавать разные темы и проверять, что у span разные стили
});

