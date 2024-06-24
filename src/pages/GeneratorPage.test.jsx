import { describe, it, expect } from "vitest";
import {fireEvent, render, screen,} from "@testing-library/react";
import GeneratorPage from "./GeneratorPage.jsx";


describe("Generator Page Tests", () => {

    it("renders with title", async () => {
        render(<GeneratorPage />);
        const header = await screen.findByTestId('page-title')
        expect(header).toBeTruthy()
    });

    it("renders with empty rows", async () => {
        render(<GeneratorPage />);

        const emptyTable = await screen.queryByText('No rows')
        expect(emptyTable).toBeTruthy()

    });

    it("on click generates new row", async () => {
        render(<GeneratorPage />);
        const button = await screen.findByTestId('button-generate')
        expect(button).toBeTruthy()
        fireEvent.click(button)


        const emptyTable = await screen.queryByText('No rows')
        expect(emptyTable).toBeNull()

        const noDigitGeneratedElement = await screen.queryByText('-')
        expect(noDigitGeneratedElement).toBeNull()
    });

});