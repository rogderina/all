import * as datas from './datas.js';
Cypress.Commands.add('new_task', () => {
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task0 = text.trim()
        const task0_true0 = "В работе (0) :";
        cy.log(task0);
        if (task0===task0_true0)
        {cy.log ('good')}
        else {cy.log ('bad')}
      });
    cy.get('input[id="newTask"]')
    .should('exist')
    .type(datas.kiril)   
    cy.get('[class="btn btn-primary btn-sm mt-2"]')
    .should('exist')
    .click()  
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task1 = text.trim()
        const task1_true1 = "В работе (1) :";
        cy.log(task1);
        if (task1===task1_true1)
        {console.log ('good')}
        else {console.log ('bad')}
      });
    
})
Cypress.Commands.add('new_task_with_data', () => {
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task0 = text.trim()
        const task0_true0 = "В работе (0) :";
        cy.log(task0);
        if (task0===task0_true0)
        {cy.log ('good')}
        else {cy.log ('bad')}
      });
    cy.get('input[id="newTask"]')
    .should('exist')
    .type(datas.kiril)
    cy.xpath('/html/body/div/div[2]/div/div[1]/div/div/input[2]')
    .should('exist')
    .type(datas.data1)  
    cy.get('[class="btn btn-primary btn-sm mt-2"]')
    .should('exist')
    .click()   
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task1 = text.trim()
        const task1_true1 = "В работе (1) :";
        cy.log(task1);
        if (task1===task1_true1)
        {console.log ('good')}
        else {console.log ('bad')}
      });
    cy.wait(100)
})
Cypress.Commands.add('change_name', () => {
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task1 = text.trim()
        const task1_true1 = "В работе (1) :";
        cy.log(task1);
        if (task1===task1_true1)
        {console.log ('good')}
        else {console.log ('bad')}
      });
    cy.get('[class="btn btn-secondary btn-sm anim-btn"]')
    .should('exist')
    .click()   
    cy.get('[class="btn btn-danger btn-sm anim-btn"]')
    .should('be.disabled')
    cy.get('[class="btn btn-success btn-sm anim-btn"]')
    .should('be.disabled')
    cy.xpath('/html/body/div/div[2]/div/div[2]/ul/li/input[1]')
    .should('exist')
    .type(datas.latin)     
    cy.xpath('/html/body/div/div[2]/div/div[2]/ul/li/input[1]')
    .should('exist').click()  
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task1 = text.trim()
        const task1_true1 = "В работе (1) :";
        cy.log(task1);
        if (task1===task1_true1)
        {console.log ('good')}
        else {console.log ('bad')}
      });
      
})
Cypress.Commands.add('change_data', () => {
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task1 = text.trim()
        const task1_true1 = "В работе (1) :";
        cy.log(task1);
        if (task1===task1_true1)
        {console.log ('good')}
        else {console.log ('bad')}
      });
    cy.get('[class="btn btn-secondary btn-sm anim-btn"]')
    .should('exist')
    .click()   
    cy.get('[class="btn btn-danger btn-sm anim-btn"]')
    .should('be.disabled')
    cy.get('[class="btn btn-success btn-sm anim-btn"]')
    .should('be.disabled')
    cy.xpath('/html/body/div/div[2]/div/div[2]/ul/li/input[2]')
    .should('exist')
    .type(datas.data2)     
    cy.xpath('/html/body/div/div[2]/div/div[2]/ul/li/input[2]')
    .should('exist')
    .click()    
    cy.xpath('/html/body/div/div[2]/div/div[2]/h2'). invoke('text').then(text => {
        const task1 = text.trim()
        const task1_true1 = "В работе (1) :";
        cy.log(task1);
        if (task1===task1_true1)
        {console.log ('good')}
        else {console.log ('bad')}
      });
})

Cypress.Commands.add('pagination_3_pages', () => {
    
    for (let i = 0; i < 13; i++) { 
        

            cy.get('input[id="newTask"]')
    .should('exist')
    .type(datas.kiril)   
    cy.get('[class="btn btn-primary btn-sm mt-2"]')
    .should('exist')
    .click()  
        }

})




