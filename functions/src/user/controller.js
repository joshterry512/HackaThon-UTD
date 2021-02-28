//proxySpotifyToken method that will handle our authorization 
//calls and inject the Client Secret of our oAuth provider where required.
const spotifyConfig = {
    clientId: "*******",
    clientSecret: "**********",
    redirectUrl: "com.authdemo://oauthredirect" // the redirect
};

async function proxySpotifyToken(_req, res){
    //Retrieve code from request
    const code = _req.body.code;
    const refreshToken = _req.body.refresh_token;

    if(!code && !refreshToken){
        return res.status(403).json({success: false, data: "Not authorized"});
    }

    if(refreshToken){ 
        //Refresh token is available, retrieve a new access token
        return res.json({ todo: "Refresh accesstoken"});
    }

    if(code){
        //Retrieve new refresh token and access token
        return res.json({ todo: "Get refresh token & access token"});
    }


}

module.exports = {
    proxySpotifyToken
};