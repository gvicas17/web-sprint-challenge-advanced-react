import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm/>)

    const header = screen.getByText(/Checkout Form/i)

    expect(header).toBeTruthy
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const submit = screen.getByRole("button")
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)
    const state = screen.getByLabelText(/State/i)
    const zip = screen.getByLabelText(/Zip/i)

    fireEvent.change(firstName,{target: {name:'firstName', value:'Gabby'}}) 
    fireEvent.change(lastName,{target: {name: 'lastName', value:'Vicas'}}) 
    fireEvent.change(address,{target: {name:'address', value:'739 W Briar Pl'}}) 
    fireEvent.change(city,{target: {name:'city', value:'Chicago'}}) 
    fireEvent.change(state,{target: {name:'state', value:'IL'}}) 
    fireEvent.change(zip,{target: {name:'zip', value:'60657'}}) 
    fireEvent.click(submit)

    expect(screen.getAllByText(/You have ordered some plants! Woo-hoo!/i))

});
