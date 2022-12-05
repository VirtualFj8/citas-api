
var cors = require('cors');

module.exports = function(app) {
      var allowlist = ['http://localhost:8081', 'http://localhost:3000']
      var corsOptionsDelegate = function (req, callback) {
        var corsOptions;
        if (allowlist.indexOf(req.header('Origin')) !== -1) {
          corsOptions = { 
            origin: true,
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            preflightContinue: false,
            optionsSuccessStatus: 204 
          } // reflect (enable) the requested origin in the CORS response
        } else {
          corsOptions = { origin: false } // disable CORS for this request
        }
        callback(null, corsOptions) // callback expects two parameters: error and options
      }

      app.use(cors(corsOptionsDelegate)); 
      
 };