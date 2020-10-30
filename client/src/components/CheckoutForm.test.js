import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders",() => {
    render(<CheckoutForm/>)

    const header = screen.findByText(/CheckoutForm/i)
    
    expect(header).toBeTruthy()
});

test("form shows success message on submit with form details",() => {
    render(<CheckoutForm/>)

    const first = screen.queryByLabelText(/First Name/i)
    const last = screen.queryByLabelText(/Last Name/i)
    const address = screen.queryByLabelText(/Address/i)
    const city = screen.queryByLabelText(/City/i)
    const state = screen.queryByLabelText(/State/i)
    const zip = screen.queryByLabelText(/Zip/i)
    const button = screen.getByRole('button')
    // const message = screen.findByTestId('successMessage')

    fireEvent.change(first, {target:{name: 'firstName', value: 'Gabby'}})
    fireEvent.change(last, {target:{name: 'lastName', value: 'Vicas'}})
    fireEvent.change(address, {target:{name: 'address', value: '739 W Briar Pl'}})
    fireEvent.change(city, {target:{name:'city', value: 'Chicago'}})
    fireEvent.change(state, {target:{name:'state', value: 'IL'}})
    fireEvent.change(zip, {target:{name: 'zip', value: '60657'}})
    fireEvent.click(button)
    expect(screen.getAllByText(/Your new green friends will be shipped to:/i))
});
