var React = require('react');
var reactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', ()=>{
  it('Should exist', ()=>{
    expect(Todo).toExist();
  });
  it('Should call onToggle prop with id on click', ()=>{
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    var $el = $(reactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(199);
  });

});
