'use strict';

angular.
  module('editTodo').
    component('editTodo', {
      templateUrl: 'edit-todo/edit-todo.template.html',
      controller: ['$stateParams', '$state',
        function TodoList($stateParams, $state) {
          this.todoList = JSON.parse(localStorage.todoList);
          this.todoId = $stateParams.todoId;
          this.title = this.todoList.find(todo => todo.id === parseInt(this.todoId)).title;

          this.close = () => {
            $state.go('todo');
          };

          this.editTodo = () => {
            let index = this.todoList.findIndex((todo) => todo.id === parseInt(this.todoId));
            this.todoList[index].title = this.title;
            localStorage.todoList = JSON.stringify(this.todoList);
            this.close();
          };
        }]
});
