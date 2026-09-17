class BookingService {
  constructor() {
    this.baseUrl = 'https://restful-booker.herokuapp.com';
  }

  authenticate(credentials, failOnStatusCode = true) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/auth`,
      failOnStatusCode,
      body: credentials
    });
  }

  createBooking(bookingData) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/booking`,
      body: bookingData
    });
  }

  getBooking(bookingId, failOnStatusCode = true) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/booking/${bookingId}`,
      failOnStatusCode
    });
  }

  updateBooking(
    bookingId,
    bookingData,
    token,
    failOnStatusCode = true
  ) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    if (token) {
      headers.Cookie = `token=${token}`;
    }

    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/booking/${bookingId}`,
      failOnStatusCode,
      headers,
      body: bookingData
    });
  }

  deleteBooking(
    bookingId,
    token,
    failOnStatusCode = true
  ) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/booking/${bookingId}`,
      failOnStatusCode,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `token=${token}`
      }
    });
  }
}

export default new BookingService();