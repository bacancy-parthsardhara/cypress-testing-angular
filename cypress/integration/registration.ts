describe('Registration page test cases', () => {
    it('Should visit the registration page', () => {
        cy.visit('/registration');
        cy.url().should('includes', 'registration');
        cy.get('#registrationFormTitle').should('be.visible');
        cy.get('#registrationFormTitle').should('have.text', 'Registration Form');
        cy.get('#registrationFormEmailInputValue').should('not.exist');
        cy.get('#registrationFormPasswordInputValue').should('not.exist');
    })

    it('Should check validation error for email', () => {
        cy.visit('/registration');
        cy.url().should('includes', 'registration');
        cy.get('#registrationFormEmailInput').focus();
        cy.get('#registrationFormPasswordInput').focus();
        cy.get('#registrationFormEmailInputErrorRequired').should('be.visible');
        cy.get('#registrationFormEmailInputErrorInvalid').should('be.visible');
    })

    it('Should enter valid email and hide the errors line', () => {
        cy.visit('/registration');
        cy.url().should('includes', 'registration');
        cy.get('#registrationFormEmailInput').focus();
        cy.get('#registrationFormPasswordInput').focus();
        cy.get('#registrationFormEmailInput').type('parth@gmail.com');
        cy.get('#registrationFormEmailInputErrorRequired').should('not.exist');
        cy.get('#registrationFormEmailInputErrorInvalid').should('not.exist');
    })

    it('Should enter valid email and hide the errors line', () => {
        cy.visit('/registration');
        cy.url().should('includes', 'registration');
        cy.get('#registrationFormLanguageSelect').select('English');
        cy.wait(2000);
        cy.get('#registrationFormLanguageSelect').select('French');
    })

    it('Should register the record and redirect to the dashboard page', () => {
        cy.visit('/registration');
        cy.url().should('includes', 'registration');
        cy.get('#registrationFormNameInput').type('Parth Sardhara');
        cy.get('#registrationFormMobileNoInput').type('9876543211');
        cy.get('#registrationFormEmailInput').type('parth@gmail.com');
        cy.get('#registrationFormPasswordInput').type('Parth@123');
        cy.get('#registrationFormLanguageSelect').select('English');
        cy.get('#registrationFormGenderMaleRadio').click();
        cy.get('#registrationFormSubmitButton').click();
    })

})
