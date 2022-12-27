import React from "react";
import Signup from "../Signup";
import { fireEvent, render } from '@testing-library/react-native';

describe('Signup Screen', () => {

    it('Terms and Conditions Navigation' , () => {
        const navigation = {navigate: () => {}} ;
        jest.spyOn(navigation, 'navigate') ; 
        const page = render(<Signup navigation={navigation}/>) ;

        const text = page.getByTestId("TermsandConditions") ;
        fireEvent.press(text) ;
        expect(navigation.navigate).toHaveBeenCalledWith("TermsAndConditions") ;
    })
    
})