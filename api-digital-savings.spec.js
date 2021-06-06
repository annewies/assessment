/// <reference types="cypress" />

import { userID } from "..."

describe('GET DigitalSavingsServiceURL/userID', () => {
  
  it('gets stamps and full cards for user', () => {

    cy
      .request({
        method: 'GET',
        url: `/${userID}`,
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.userID).to.eq(${userID})
        expect(response.body).to.have.property('stamps')
        expect(response.body).to.have.property('fullCards')
      }

  })
  )

  it('gives an error for invalid userID', () => {
    
    cy
      .request({
        method: 'GET',
        url: `/${userID}/1234`,
      })
      .then((response) => {
        expect(response.status).to.eq(422);
        expect(response.body.errors.length).to.eq(1);
      }

  })
  )

})