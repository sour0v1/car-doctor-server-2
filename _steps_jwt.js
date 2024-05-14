/* 
To secure api follow those steps

Client Side : 
    1.create a post request like that :
        axios.post('', loggedUserEmail, {withCredentials : true} )
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
    2.
Server Side
    1.install jwt
    2.import jwt - const jwt = require('jsonwebtoken');
    3.create a post api
    4.follow the jwt doc
    5.configure cors middleware : 
        app.use(cors({
    origin : ['http://localhost:5175'],
    credentials : true
    })); 
    6.set cookie :
        res.cookie('token', token, {
                httpOnly : true,
                secure : true,
                sameSite : 'none'
            })  
    7.                     
*/
/* 
for secure api call
server side
    1.install cookie  parser
    2.import cookie parser and use it as middleware
    3.get token by "req.cookies"
client side: 
    1.include {credential : 'include} in fetch and in axios add {withCradential : true}       
    2.
*/