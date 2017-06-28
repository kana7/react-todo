var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('Should exist', ()=>{
    expect(TodoAPI).toExist();
  });
  describe('setTodos', ()=>{
    it('Should set valid todos array', ()=>{
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('Should not set invalid todos array', ()=>{
      var badTodos = {a:'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', ()=>{

  });

});
