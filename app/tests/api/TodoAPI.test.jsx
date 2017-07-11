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
    it('Should return empty array for bad bad localStorage data', ()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('Should return todo if valid array in localStorage', ()=>{
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
  describe('filterTodos', ()=>{
    var todos = [{
      id: 1,
      text: 'Some Text',
      completed: false
    },
    {
      id: 2,
      text: 'Some other Text',
      completed: true
    },
    {
      id: 3,
      text: 'Another Text',
      completed: true
    }];
    it('Should return all items if showCompleted is true', ()=>{
      var filteredTodos=TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('Should return non-completed items if showCompleted is false', ()=>{
      var filteredTodos=TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('Should sort by completed status', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });
    it('Should filter todos by searchText', ()=>{
      var text = 'Some';
      var filteredTodos = TodoAPI.filterTodos(todos, true, text);
      expect(filteredTodos.length).toBe(2);
    });
    it('Should return all todos if searchText is empty', ()=>{
      var filteredTodos=TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
