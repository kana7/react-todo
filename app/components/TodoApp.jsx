var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos: [
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
        }
      ]
    }
  },
  handleAddTodo: function(text){
    //alert('nouveau Todo :'+ text);
    var newTodosArray = this.state.todos.slice();
    newTodosArray.push({
      id: newTodosArray[newTodosArray.length-1]['id']+1,
      text: text
    });
    this.setState(
      {
        todos : newTodosArray
      }
    );
  },
  render: function(){
    var {todos}= this.state;
    return(
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
