'use strict';

angular.
  module('todoList').
    component('todoList', {
      templateUrl: 'todo-list/todo-list.template.html',
      controller: ['$state',
        function TodoList($state) {
          this.title = '';
          this.todoList = JSON.parse(localStorage.todoList);

          this.addTodo = () => {
            this.todoList.push({
              id: new Date().valueOf(),
              title: this.title,
              status: false,
            });
            localStorage.todoList = JSON.stringify(this.todoList);
            this.title = '';
          };

          this.handleStatus = (todoId) => {
            let index = this.todoList.findIndex(todo => todo.id === todoId);
            this.todoList[index].status = !!this.todoList[index].status;
            localStorage.todoList = JSON.stringify(this.todoList);
          };

          this.deleteTodo = (todoId) => {
            let index = this.todoList.findIndex(todo => todo.id === todoId);
            this.todoList.splice(index, 1);
            localStorage.todoList = JSON.stringify(this.todoList);
          };

          this.editTodo = (todoId) => {
            $state.go("edit", { todoId });
          };
        }]
  });
