const spotifyConfig = {
    clientId: "84ab725554124a628b7fa754e753f304",
    clientSecret: "94ca459597a04e0bb4b817b97951c7b7",
    redirectUri: "http://waverider//callback/"
};

var SpotifyApi = new SpotifyWebApi(spotifyConfig);


async function proxySpotifyToken(_req, res){
    //Retrieve code from request
    const code = _req.body.code;
    const refreshToken = _req.body.refresh_token;

    if(!code && !refreshToken){
        return res.status(403).json({success: false, data: "Not authorized"});
    }

    if(refreshToken){ 
        //Refresh token is available, retrieve a new access token
        spotifyApi.setRefreshToken(refreshToken);
        SpotifyApi.refreshAccessToken().then(
            (data) => {
                data.body.refreshToken = refreshToken;
                return res.json(data.body);
            },
            (error) => {
                console.log('Could not refresh access token...', err);
            }
        ).catch((oError) => {
            return res.json(oError);
        });
    }

    if(code){
        //Retrieve new refresh token and access token
        SpotifyApi.authorizationCodeGrant(code).then(
            (data) => {
                return res.json(data.body);
            },
            (err) => {
                console.log('Something went wrong!', err);
            }
        ).catch((oError) => {
            return res.json(oError);
        });
    }



}

module.exports = {
    proxySpotifyToken
};