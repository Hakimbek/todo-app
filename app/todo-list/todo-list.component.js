'use strict';

angular.
  module('todoList').
    component('todoList', {
      templateUrl: 'todo-list/todo-list.template.html',
      controller: [
        function TodoList() {
          this.title = '';
          this.todoList = JSON.parse(localStorage.todoList);

          this.addTodo = function () {
            this.todoList.push({
              id: new Date().valueOf(),
              title: this.title,
              status: false,
            });
            localStorage.todoList = JSON.stringify(this.todoList);
            this.title = '';
          };

          this.handleStatus = function (todoId) {
            let index = this.todoList.findIndex(todo => todo.id === todoId);
            this.todoList[index].status = !!this.todoList[index].status;
            localStorage.todoList = JSON.stringify(this.todoList);
          };

          this.deleteTodo = function (todoId) {
            let index = this.todoList.findIndex(todo => todo.id === todoId);
            this.todoList.splice(index, 1);
            localStorage.todoList = JSON.stringify(this.todoList);
          };
        }]
  });
