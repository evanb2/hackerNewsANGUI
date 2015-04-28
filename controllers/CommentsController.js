hackerNews.controller('CommentsCtrl', function CommentsCtrl ($scope, $stateParams, ThreadsFactory, UtilitiesFactory){
  //Allows each comment to be associated with a specific thread, which we findById
  $scope.thread = UtilitiesFactory.findById(ThreadsFactory.threads, $stateParams.threadId)

  //Function for adding a comment
  $scope.addComment = function() {
    $scope.thread.comments.push({ text: $scope.commentText });
    $scope.commentText = null;
  }
});
