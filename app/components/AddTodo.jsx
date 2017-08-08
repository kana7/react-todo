var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.todoText.value;
    if (todo.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todo));
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="Que devez vous faire?"/>
          <button className="button expanded">Ajouter Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
