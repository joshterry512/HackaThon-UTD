const spotifyConfig = {
    clientId: "*******",
    clientSecret: "**********",
    redirectUrl: "com.authdemo://oauthredirect"
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