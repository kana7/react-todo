var React = require('react');
var uuid = require('node-uuid');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Promener le chien'
        },
        {
          id: uuid(),
          text: 'Tondre la pelouse'
        },
        {
          id: uuid(),
          text: 'Acheter une voiture'
        },
        {
          id: uuid(),
          text: 'Faire des spagettis'
        }
      ]
    }
  },
  handleAddTodo: function(text){
    this.setState({
        todos : [
          ...this.state.todos,
          {
            id: uuid(),
            text: text
          }
        ]
      });
  },
  handleSearch: function(showCompleted, searchText){
     this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos}= this.state;
    return(
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
