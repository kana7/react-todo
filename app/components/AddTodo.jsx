var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var todo = this.refs.todoText.value;
    if (todo.length > 0) {
      this.props.onAddTodo(todo);
    }else{
      this.refs.todoText.focus();
    }
    this.refs.todoText.value = '';
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="Que devez vous faire?"/>
          <button className="button expanded">Ajouter Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
