describe('Validación de vulnerabilidad XSS', () => {

  it('Debe evidenciar la interpretación de HTML ingresado por el usuario', () => {

    cy.visit('http://localhost:3000');

    // Login
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    // Crear tarea con HTML
    cy.get('#taskTitle').type('<h1>TAREA MALICIOSA</h1>');
    cy.contains('button', 'Crear tarea').click();

    // Verificar que se renderizó un elemento H1 dentro de la lista
    cy.get('#taskList')
      .should('exist')
      .and('contain.text', 'TAREA MALICIOSA');

  });

});