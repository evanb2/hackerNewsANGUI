hackerNews.controller('ThreadsCtrl', function ThreadsCtrl($scope, ThreadsFactory) {
  //Keeps business logic in the factory, uses controller as a middle-man
  $scope.threads = ThreadsFactory.threads;
  $scope.ThreadsFactory = ThreadsFactory;
});
