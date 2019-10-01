import "./Todo.css";
import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: []
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  addToList = () => {
    this.setState({ list: [...this.state.list, this.state.input] });
    console.log(this.state.list);
  };

  render() {
    let listDisplay = this.state.list.map((val, index) => {
      return <div className="todo__item">{val}</div>;
    });
    return (
      <div className="page__cont">
        <div className="navbar">
          <div className="title">DM26 ToDo List</div>
          <ul className="menu__items">
            <li>Here</li>
            <li>Learn</li>
            <li>More</li>
            <li>React</li>
          </ul>
        </div>
        <div className="header">
          <div className="todo__title">Todo list...</div>
          <div className="input__and__button">
            <input
              className="todo__input"
              placeholder="Add task..."
              onChange={this.handleChange}
            ></input>
            <button
              className="add__button"
              onClick={() => this.addToList(this.state.input)}
            >
              +
            </button>
          </div>
          <div className="todo__display"></div>
          {listDisplay}
        </div>
      </div>
    );
  }
}

export default Todo;
