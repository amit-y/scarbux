var express = require('express'),
  router = express.Router();

var Q = require('q'),
  request = require('request'),
  config = require('../config.json'),
  utils = require('../lib/utils');

/* GET cars listing. */
router.get('/makes', function(req, res) {
  var e, params = {
    'fmt': 'json',
    'state': 'new',
    'api_key': config.edmunds.api.key
  };
  
  e = apiCall(utils.edmundsapiURL('makes',params))
  .then(function(makes) {
    console.log(makes);

  })

  e.done(function() {
    res.end();
  })

  e.fail(function(err) {
    console.log(err);
    throw(err);
  });

  
});

router.get('/models', function(req, res) {
  var e, methodchain = ['hyundai','models'],
    params = {
      'fmt': 'json',
      'state': 'new',
      'api_key': config.edmunds.api.key
    };
  e = apiCall(utils.edmundsapiURL(methodchain, params))
  .then(function(models) {
    console.log(models);
  })

  e.done(function() {
    res.end();
  })

  e.fail(function(err) {
    console.log(err);
    throw(err);
  })
});

router.get('/model/years', function(req, res) {
  var e, methodchain = ['hyundai', 'sonata', 'years'],
    params = {
      'fmt': 'json',
      'state': 'new',
      'api_key': config.edmunds.api.key
    };
  e = apiCall(utils.edmundsapiURL(methodchain, params))
  .then(function(years) {
    console.log(years);
  })

  e.done(function() {
    res.end();
  })

  e.fail(function(err) {
    console.log(err);
    throw(err);
  })
});

router.get('/styles', function(req, res) {
  var e, methodchain = ['hyundai', 'sonata', '2015', 'styles'],
    params = {
      'fmt': 'json',
      'state': 'new',
      'api_key': config.edmunds.api.key
    };
  e = apiCall(utils.edmundsapiURL(methodchain, params))
  .then(function(years) {
    console.log(years);
  })

  e.done(function() {
    res.end();
  })

  e.fail(function(err) {
    console.log(err);
    throw(err);
  })
});

router.get('/engines', function(req, res) {
  var e, methodchain = ['styles', '200698301', 'engines'],
    params = {
      'fmt': 'json',
      'api_key': config.edmunds.api.key
    };
  e = apiCall(utils.edmundsapiURL(methodchain, params))
  .then(function(years) {
    console.log(years);
  })

  e.done(function() {
    res.end();
  })

  e.fail(function(err) {
    console.log(err);
    throw(err);
  })
});

module.exports = router;


function apiCall(url) {
  return Q.promise(function(resolve, reject) {
    request(url, function(err, response, body) {
      if (err) reject(err);
      if (response.statusCode!=200) reject(new Error('Unsuccessful response code!'));

      resolve(JSON.parse(body));
    });
  });
}

/*

     { id: 200001398,
       name: 'Hyundai',
       niceName: 'hyundai',
       models: [Object] },


     { id: 'Hyundai_Sonata',
       name: 'Sonata',
       niceName: 'sonata',
       years: [Object] },

     { id: 200491187, year: 2014, styles: [Object] },
     { id: 200485676, year: 2015, styles: [Object] }

     { make: [Object],
       model: [Object],
       id: 200698301,
       name: 'Limited 4dr Sedan (2.4L 4cyl 6A)',
       year: [Object],
       submodel: [Object],
       trim: 'Limited' } 
*/