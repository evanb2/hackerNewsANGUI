hackerNews.factory('UtilitiesFactory', function UtilitiesFactory() {
  //Create a new factory object
  var factory = {};
  //Function to find each thread by it's unique ID
  factory.findById = function(collection, id) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].id == id) {
        return collection[i];
      }
    }
    return null;
  };

  return factory;
});
