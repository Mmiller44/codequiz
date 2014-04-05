'use strict';

angular.module('codequizApp')

// This factory is set up to work like an AJAX call. It will use $http.get() to make the call.
// After the call has been made, the data is then ran through another function and returned.
  .factory('quizServices', function($http) {
  return {
      getAllQuizzes: function() {
           //return the promise directly.
            return $http.get('/get-all-quizzes/')
                     .then(function(result) {
                          //resolve the promise as the data
                          return result.data;
                        });
          }
    };
});