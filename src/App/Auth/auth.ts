import * as auth0 from 'auth0-js';
import history from '../../history'

export default class Auth {  

  public auth0 = new auth0.WebAuth({
    clientID: 'U7TZy4Jgg3_uzhAv4r5eg20gN0alo-dg',
    domain: 'paddington.eu.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  }); 

  public handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/error');
        console.log(err);
      }
    });
  }

  public setSession = (authResult: any) => {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/');
  }

  public logout = () => {    
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/signedout');
  }

  public isAuthenticated = () => {
    // Check whether the current time is past the 
    // Access Token's expiry time    
    const expiresAtItem = localStorage.getItem('expires_at') || '';
    if (expiresAtItem === ''){
      return false
    };
    const expiresAt = JSON.parse(expiresAtItem);
    return new Date().getTime() < expiresAt;
  }

  public login = () => {
    console.log('logging in');
    this.auth0.authorize();
  }



}
