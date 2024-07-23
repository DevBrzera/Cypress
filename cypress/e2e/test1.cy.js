/// <reference types='cypress' />

describe('RPV Finance Controls', () => {
    // hooks
    // trechos que executam antes e depois do teste
    // before --> antes de todos os testes
    // beforeEach --> antes de cada teste
    // after --> depois de todos os testes
    // afterEach --> depois de cada teste

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app'); // visitar a página
    });




it('cadastrar entradas', () => {
    // fluxo manual enter
    // mapear os elementos que vamos interagir
    // descrever as interações com cypress
    // adicionar as asserções que vamos precisar
    // cy.get --> mapear um elemento

    cy.get('#data-table tbody tr').should('have.length',0);

    cy.get('#transaction .button').click(); // id + class
    cy.get('#description').type('Presente Dia dos Pais');
    cy.get('[name=amount]').type('250'); // atributo
    cy.get('#date').type('2024-07-17'); // atributo
    cy.get('button').contains('Salvar').click(); // tipo

    cy.get('#data-table tbody tr').should('have.length',1);

    cy.get(':nth-child(4) > img').click();

})
it('cadastrar saidas', () => {
    // fluxo manual enter
    // mapear os elementos que vamos interagir
    // descrever as interações com cypress
    // adicionar as asserções que vamos precisar
    // cy.get --> mapear um elemento

    cy.get('#data-table tbody tr').should('have.length',0);

    cy.get('#transaction .button').click(); // id + class
    cy.get('#description').type('Pacote RGX');
    cy.get('[name=amount]').type('-220'); // atributo
    cy.get('#date').type('2024-07-22'); // atributo
    cy.get('button').contains('Salvar').click(); // tipo

    cy.get('#data-table tbody tr').should('have.length',1);
})

it.only('remover lançamento', () => {
    cy.get('#data-table tbody tr').should('have.length', 0);

    cy.get('#transaction .button').click(); // id + class
    cy.get('#description').type('Teste Remover');
    cy.get('[name=amount]').type('150'); // atributo
    cy.get('#date').type('2024-07-22'); // atributo
    cy.get('button').contains('Salvar').click(); // tipo

    cy.get('#data-table tbody tr').should('have.length', 1);

    cy.get(':nth-child(4) > img').click();

    cy.get('#data-table tbody tr').should('have.length', 0);
});
});