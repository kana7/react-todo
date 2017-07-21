var expect = require('expect');
var actions = require('actions');

describe('Actions', ()=>{

  it('Should generate search text action', ()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      SearchText : 'Some text'
    };
    var res = actions.setSearchText(action.SearchText);
    expect(res).toEqual(action);
  });

  it('Should generate add todo action', ()=>{
    var action = {
      type: 'ADD_TODO',
      text : 'Walk the dog'
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('Should generate toggle show completed action', ()=>{
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('Should generate toggle todo action', ()=>{
    var action = {
      type: 'TOGGLE_TODO',
      id: 452
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

});
