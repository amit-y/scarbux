exports.edmundsapiURL = function(method, params) {
  var _url = 'http://api.edmunds.com/api/vehicle/v2/';
  if (method) {
    if (typeof method == 'string') {
      _url += method + '?';
    } else if (toString.call(method) === '[object Array]') {
      for (var m = 0, mm = method.length; m < mm; m++) {
        _url += method[m];
        if (m!==(method.length-1)) {
          _url += '/';
        } else {
          _url += '?';
        }
      }
    }
  }

  if (params) {
    for (var param in params) {
      _url += param + '=' + params[param] + '&';
    }
  }

  if (_url.slice(-1)==='&') _url = _url.slice(0,-1);

  return _url;
}