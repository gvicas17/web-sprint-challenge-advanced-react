import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.findByText(/CheckoutForm/i)
    
    expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const first = screen.findByLabelText(/First Name/i)
    // const last = screen.findByLabelText(/Last Name/i)
    // const address = screen.findByLabelText(/Address/i)
    // const city = screen.findByLabelText(/City/i)
    // const state = screen.findByLabelText(/State/i)
    // const zip = screen.findByLabelText(/Zip/i)
    // const button = screen.findAllByRole('button')
    // const message = screen.findByText(/You have ordered some plants!/i)

    fireEvent.change(first, {target:{name: 'firstName', value: 'Gabby'}})
    // fireEvent.change(last, {target:{name: 'lastName', value: 'Vicas'}})
    // fireEvent.change(address, {target:{name: 'address', value: '739 W Briar Pl'}})
    // fireEvent.change(city, {target:{name:'city', value: 'Chicago'}})
    // fireEvent.change(state, {target:{name:'state', value: 'IL'}})
    // fireEvent.change(zip, {target:{name: 'zip', value: '60657'}})
    // fireEvent.click(button)
    // expect(message).toBeTruthy()
});
