describe('Kiểm thử giao diện tính chỉ số BMI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('tính và hiển thị chỉ số BMI với nhiều trường hợp', () => {
    const testCases = [
      { height: '165', weight: '60', expected: 'Bình thường' },
      { height: '170', weight: '80', expected: 'Thừa cân' },
      { height: '150', weight: '40', expected: 'Gầy' },
      { height: '170', weight: '90', expected: 'Béo phì' },
      { height: '160', weight: '50', expected: 'Bình thường' },
      { height: '175', weight: '85', expected: 'Thừa cân' }
    ];

    testCases.forEach(({ height, weight, expected }) => {
      cy.get('#height').clear().type(height);
      cy.get('#weight').clear().type(weight);
      cy.get('button').contains('Tính BMI').click();
      cy.get('#bmiResult').should('contain', expected);
    });
  });
});