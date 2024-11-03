describe('Kiểm thử giao diện lưu tên', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('hiển thị lời chào sau khi gửi tên', () => {
    const names = ['John', 'Jane', 'Alice', 'Bob'];
    names.forEach(name => {
      cy.get('#name').clear().type(name);
      cy.get('button').contains('Gửi tên').click();
      cy.get('#nameResponse').should('contain', `Xin chào, ${name}!`);
    });
  });
});