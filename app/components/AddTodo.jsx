var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    if (todo.length > 0) {
      this.props.onAddTodo(todo);
    }
    this.refs.todo.value = '';
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="todo" placeholder="Votre tâche à faire"/>
          <button className="button expanded">Créer</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
