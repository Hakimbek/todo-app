'use strict';

angular.
  module('todoApp').
    config(['$routeProvider',
      function config($routeProvider) {
        $routeProvider.
          when('/todo', {
            template: '<todo-list></todo-list>'
          }).
          when('/edit/:todoId', {
            template: '<edit-todo></edit-todo>'
          }).
          otherwise('/todo');
    }
]).run(function () {
  if (!localStorage.todoList) {
    localStorage.todoList = JSON.stringify([
      {
        id: 1075694399129,
        title: 'Learn CSS',
        status: false
      },
      {
        id: 1005694399129,
        title: 'Learn HTML',
        status: false
      },
      {
        id: 1000694399129,
        title: 'Learn JavaScript',
        status: false
      },
      {
        id: 1010694399129,
        title: 'Learn AngularJS',
        status: false
      }
    ]);
  }
});
