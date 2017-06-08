var React = require('react');

var TodoList = require('TodoList');

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
  render: function(){
    var {todos}= this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
