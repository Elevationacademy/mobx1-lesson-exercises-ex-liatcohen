import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let location = prompt("Please enter new location", "location");
    console.log(location)
    this.props.store.editItem(this.props.item.name, location)

  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    return (
      <div className={this.props.item.completed ? "crossed" : null}>
        <input type="checkbox" onClick={this.checkItem} value={this.props.item.name} />
        {this.props.item.name}, {this.props.item.location}
        <button className="editButton" onClick={this.editItem}>edit</button>
        <button className="deleteButton" onClick={this.deleteItem}>delete</button>
      </div>)
  }
}

export default Item