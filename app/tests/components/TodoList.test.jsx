var React = require('react');
var reactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', ()=>{
  it('Should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item', ()=>{
    var todos = [
      {
        id: 1,
        text: 'Promener le chien'
      },
      {
        id: 2,
        text: 'Tondre la pelouse'
      },
      {
        id: 3,
        text: 'Acheter une voiture'
      },
      {
        id: 4,
        text: 'Faire des spagettis'
      }];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>); //render in browser
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo); //check how many todo in todolist
      expect(todosComponents.length).toBe(todos.length);
  });
});
