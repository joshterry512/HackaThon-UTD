import {authorize, refresh} from 'react-native-app-auth';

class AuthenticationHandler {
  spotifyAuthConfig: { clientId: string; clientSecret: string; redirectUrl: string; scopes: string[]; serviceConfiguration: { authorizationEndpoint: string; tokenEndpoint: string; }; };
  constructor() {
    this.spotifyAuthConfig = {
      clientId: '84ab725554124a628b7fa754e753f304',
      clientSecret: '94ca459597a04e0bb4b817b97951c7b7',
      redirectUrl: 'https://auth.expo.io/@findchelsea16/waverider',
      scopes: [
        'playlist-read-private',
        'playlist-modify-public',
        'playlist-modify-private',
        'user-library-read',
        'user-library-modify',
        'user-top-read',
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://waverider-53d8c-default-rtdb.firebaseio.com/api/user/authentication',
      },
    };
  }

  async onLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig);
      alert(JSON.stringify(result));
      return result;
    } catch (error) {
      console.log(JSON.stringify(error));
    } 
  }

  async refreshLogin(refreshToken: any) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }

}

const authHandler = new AuthenticationHandler();

export default authHandler;