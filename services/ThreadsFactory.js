hackerNews.factory('ThreadsFactory', function ThreadsFactory() {
  //Create new factory object
  var factory = {};
  //Create empty array for threads
  factory.threads = [];
  //Function for adding a new thread
  factory.addThread = function() {
    //ID receives + 1 because array indecies begin at 0
    //Comments is an empty array
    //New date() stamp is created with each new thread
    factory.threads.push({ name: factory.threadName, id: factory.threads.length + 1,
      comments: [], url: factory.threadUrl, votes: 0, date: new Date(), user: factory.userName });
    //Reset inputs to null
    factory.threadName = null;
    factory.threadUrl = null;
    factory.userName = null;
  };
  //Adds 1 vote to thread using the item from our ng-repeat directive
  factory.plusVote = function(item) {
    item.votes += 1;
  };
  //Subtracts 1 vote to thread using the item from our ng-repeat directive
  factory.minusVote = function(item) {
    item.votes -= 1;
  };
  //Checks each thread's date property, if 1 day has passed the thread will be removed
  factory.checkThread = function(item) {
    var currentDate = new Date();
    var elapsedTime = currentDate - item.date;
    // checks if elapsedTime is greater than 1 day (in milliseconds)
    return elapsedTime < 86400000;
  };
  return factory;
});

// A different way of removing old threads, but inefficient
//Uses setInterval to check each thread every day, in a large database this would become extremely impractical

  // var timePassed = setInterval(function() { this.days -= 10 }, 10000);
  // var ranking = (this.factory.threads.votes) + (timePassed);
  // if (this.factory.threads.ranking < 0) {
  //   var index = factory.threads.indexOf(thread);
  //   factory.threads.splice(index, 1);
  // }
