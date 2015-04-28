hackerNews.factory('ThreadsFactory', function ThreadsFactory() {
  var factory = {};
  factory.threads = [];
  factory.addThread = function() {
    factory.threads.push({ name: factory.threadName, id: factory.threads.length + 1,
      comments: [], url: factory.threadUrl, votes: 0, date: new Date(), user: factory.userName });

    factory.threadName = null;
    factory.threadUrl = null;
    factory.userName = null;
  };

  factory.plusVote = function(item) {
    item.votes += 1;
  };

  factory.minusVote = function(item) {
    item.votes -= 1;
  };

  factory.checkThread = function(item) {
    var currentDate = new Date();
    var elapsedTime = currentDate - item.date;
    // checks if elapsedTime is greater than 1 day (in milliseconds)
    return elapsedTime < 86400000;
  };
  return factory;
});

// A different way of removing old threads, but inefficient

  // var timePassed = setInterval(function() { this.days -= 10 }, 10000);
  // var ranking = (this.factory.threads.votes) + (timePassed);
  // if (this.factory.threads.ranking < 0) {
  //   var index = factory.threads.indexOf(thread);
  //   factory.threads.splice(index, 1);
  // }
