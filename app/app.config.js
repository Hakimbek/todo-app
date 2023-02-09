'use strict';

angular.
  module('todoApp').
    config(['$stateProvider', '$urlRouterProvider',
      function config($stateProvider, $urlRouterProvider) {
        $stateProvider.
          state('todo', {
            url: '/todo',
            template: '<todo-list></todo-list>'
          }).
          state('edit', {
            url: '/edit/:todoId',
            template: '<edit-todo></edit-todo>'
          });
        $urlRouterProvider.otherwise('/todo');
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
