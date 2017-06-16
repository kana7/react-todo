var React = require('react');

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
