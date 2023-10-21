const { constants } = require("../constants");


const errorHandler = (err , req, res ,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.validation_error:
            res.json({title:'validation error' , message: err.message , stackTrace: err.stack});
            
        case constants.notfound:
            res.json({title:'not found' , message: err.message , stackTrace: err.stack});
        case constants.forbidden:
                res.json({title:'forbidden' , message: err.message , stackTrace: err.stack});
        case constants.unauthorized:
                    res.json({title:'anauthorized' , message: err.message , stackTrace: err.stack});
        case constants.server_error:
                        res.json({title:'server error' , message: err.message , stackTrace: err.stack});
            default:
                console.log('no error is found');
                break;


    }
   
};

module.exports = errorHandler;
