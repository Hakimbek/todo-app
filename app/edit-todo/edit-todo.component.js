'use strict';

angular.
  module('editTodo').
    component('editTodo', {
      templateUrl: 'edit-todo/edit-todo.template.html',
      controller: ['$routeParams', '$window',
        function TodoList($routeParams, $window) {
          this.todoList = JSON.parse(localStorage.todoList);
          this.todoId = $routeParams.todoId;
          this.title = this.todoList.find(todo => todo.id === parseInt(this.todoId)).title;

          this.editTodo = () => {
            let index = this.todoList.findIndex((todo) => todo.id === parseInt(this.todoId));
            this.todoList[index].title = this.title;
            localStorage.todoList = JSON.stringify(this.todoList);
            $window.location.href = '/#!/todo';
          };
        }]
});
