/// <Reference types="cypress" />

describe('Automatización en Cypress', () =>{
    it("Find the contents Año de primera automatizacion desde Cypress", () =>{
        cy.log("Bienvenido a Cypress")
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > dic').click()
        cy.get('[name="q"]').should("be.visible").type("automatizacion{enter}")
        cy.contains('wikipedia.org').click()        
    
    })
       })
        



