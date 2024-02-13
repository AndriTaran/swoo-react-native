import React from "react";
import {Provider} from "react-redux";
import {store} from "../src/store/store";

import {fireEvent, render} from "@testing-library/react-native";
import {CounterPage} from "../src/pages/CounterPage";
import {theme} from "../src/common/theme";
import {ThemeProvider} from 'styled-components/native';
import {resetCounter,} from '../src/store/slices/counterSlice';
beforeEach(() => {
    // Reset the counter to its initial state before each test
    store.dispatch(resetCounter());
});
test('counter increments correctly', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CounterPage />
            </Provider>
        </ThemeProvider>
    );

    const incrementButton = getByTestId('incrementButton');

    // Click the button once
    fireEvent.press(incrementButton);

    // Check if the count is updated
    const countText = getByTestId('countText');
    console.log('Count Text Value:', countText.props.children);

    expect(countText.props.children).toBe(1);
});

test('counter decrement correctly', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CounterPage />
            </Provider>
        </ThemeProvider>
    );

    const incrementButton = getByTestId('decrementButton');

    // Click the button once
    fireEvent.press(incrementButton);

    // Check if the count is updated
    const countText = getByTestId('countText');
    console.log('Count Text Value:', countText.props.children);

    expect(countText.props.children).toBe(-1);
});