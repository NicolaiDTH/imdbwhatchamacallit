var imdb = require('imdb');

imdb('tt3659388', function(err, data) {
  if(err)
    return err.stack;

  if(data)
    return data;
});