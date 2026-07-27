describe('Testes de API - Restful-Booker Suite', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';

  it('CT03 - Deve gerar um token de autenticação com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/auth`,
      body: {
        username: "admin",
        password: "password123"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('CT04 - Deve criar uma nova reserva com sucesso (Contrato e Status)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/booking`,
      body: {
        firstname: "Felipe",
        lastname: "Oliveira",
        totalprice: 1500,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-08-01",
          checkout: "2026-08-10"
        },
        additionalneeds: "Breakfast"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');
      expect(response.body.booking.firstname).to.eq('Felipe');
      expect(response.body.booking.totalprice).to.eq(1500);
    });
  });
});