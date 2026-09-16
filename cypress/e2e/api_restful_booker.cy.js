describe('Testes de API - Restful-Booker Suite', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';

  const credentials = {
    username: 'admin',
    password: 'password123'
  };

  const createBookingData = (overrides = {}) => ({
    firstname: 'Felipe',
    lastname: 'Oliveira',
    totalprice: 1500,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-09-20',
      checkout: '2026-09-25'
    },
    additionalneeds: 'Breakfast',
    ...overrides
  });

  const createBooking = (bookingData) => {
    return cy.request({
      method: 'POST',
      url: `${baseUrl}/booking`,
      body: bookingData
    });
  };

  const authenticate = () => {
    return cy.request({
      method: 'POST',
      url: `${baseUrl}/auth`,
      body: credentials
    });
  };

  describe('Autenticação', () => {
    it('CT03 - Deve gerar um token de autenticação com sucesso', () => {
      authenticate().then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      });
    });

    it('CT05 - Não deve autenticar com credenciais inválidas', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/auth`,
        failOnStatusCode: false,
        body: {
          username: 'usuario_invalido',
          password: 'senha_invalida'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('reason');
        expect(response.body.reason).to.eq('Bad credentials');
        expect(response.body).to.not.have.property('token');
      });
    });
  });

  describe('Criação e consulta de reservas', () => {
    it('CT04 - Deve criar uma nova reserva com sucesso (Contrato e Status)', () => {
      const bookingData = createBookingData({
        totalprice: 1500,
        bookingdates: {
          checkin: '2026-08-01',
          checkout: '2026-08-10'
        }
      });

      createBooking(bookingData).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bookingid');
        expect(response.body).to.have.property('booking');

        expect(response.body.booking.firstname)
          .to.eq(bookingData.firstname);

        expect(response.body.booking.totalprice)
          .to.eq(bookingData.totalprice);
      });
    });

    it('CT06 - Deve retornar erro ao consultar uma reserva inexistente', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/booking/999999999`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it('CT08 - Deve criar e consultar uma reserva utilizando ID dinâmico', () => {
      const bookingData = createBookingData({
        totalprice: 1800
      });

      createBooking(bookingData).then((createResponse) => {
        expect(createResponse.status).to.eq(200);
        expect(createResponse.body).to.have.property('bookingid');

        const bookingId = createResponse.body.bookingid;

        cy.request({
          method: 'GET',
          url: `${baseUrl}/booking/${bookingId}`
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(200);

          expect(getResponse.body.firstname)
            .to.eq(bookingData.firstname);

          expect(getResponse.body.lastname)
            .to.eq(bookingData.lastname);

          expect(getResponse.body.totalprice)
            .to.eq(bookingData.totalprice);

          expect(getResponse.body.depositpaid)
            .to.eq(bookingData.depositpaid);

          expect(getResponse.body.bookingdates.checkin)
            .to.eq(bookingData.bookingdates.checkin);

          expect(getResponse.body.bookingdates.checkout)
            .to.eq(bookingData.bookingdates.checkout);

          expect(getResponse.body.additionalneeds)
            .to.eq(bookingData.additionalneeds);
        });
      });
    });
  });

  describe('Atualização e autorização de reservas', () => {
    it('CT07 - Não deve atualizar uma reserva sem autenticação', () => {
      const bookingData = createBookingData({
        totalprice: 2000,
        bookingdates: {
          checkin: '2026-08-01',
          checkout: '2026-08-10'
        }
      });

      cy.request({
        method: 'PUT',
        url: `${baseUrl}/booking/1`,
        failOnStatusCode: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: bookingData
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });

    it('CT09 - Deve atualizar uma reserva utilizando autenticação e ID dinâmico', () => {
      let token;
      let bookingId;

      const originalBooking = createBookingData();

      const updatedBooking = createBookingData({
        totalprice: 2200,
        depositpaid: false,
        bookingdates: {
          checkin: '2026-10-01',
          checkout: '2026-10-10'
        },
        additionalneeds: 'Dinner'
      });

      authenticate()
        .then((authResponse) => {
          expect(authResponse.status).to.eq(200);
          expect(authResponse.body).to.have.property('token');

          token = authResponse.body.token;

          return createBooking(originalBooking);
        })
        .then((createResponse) => {
          expect(createResponse.status).to.eq(200);
          expect(createResponse.body).to.have.property('bookingid');

          bookingId = createResponse.body.bookingid;

          return cy.request({
            method: 'PUT',
            url: `${baseUrl}/booking/${bookingId}`,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Cookie': `token=${token}`
            },
            body: updatedBooking
          });
        })
        .then((updateResponse) => {
          expect(updateResponse.status).to.eq(200);

          expect(updateResponse.body.firstname)
            .to.eq(updatedBooking.firstname);

          expect(updateResponse.body.lastname)
            .to.eq(updatedBooking.lastname);

          expect(updateResponse.body.totalprice)
            .to.eq(updatedBooking.totalprice);

          expect(updateResponse.body.depositpaid)
            .to.eq(updatedBooking.depositpaid);

          expect(updateResponse.body.bookingdates.checkin)
            .to.eq(updatedBooking.bookingdates.checkin);

          expect(updateResponse.body.bookingdates.checkout)
            .to.eq(updatedBooking.bookingdates.checkout);

          expect(updateResponse.body.additionalneeds)
            .to.eq(updatedBooking.additionalneeds);
        });
    });
  });
});