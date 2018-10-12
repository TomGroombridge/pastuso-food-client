import * as auth0 from 'auth0-js';

export default class Auth {

  public auth0 = new auth0.WebAuth({
    clientID: 'U7TZy4Jgg3_uzhAv4r5eg20gN0alo-dg',
    domain: 'paddington.eu.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  }); 

  public login = () => {
    this.auth0.authorize();
  }



}
