import React, {Component} from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item){
    return <li onClick={() => this.deleteTask(item.key)}
               key={item.key}>{item.text}</li>
  }

  deleteTask(key) {
    this.props.deleteTask(key);
  }

  render(){
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks); //calls method above and iterates over all items

    return(
      <ul className="theList">
        <FlipMove duration={150} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}
export default TodoItems;