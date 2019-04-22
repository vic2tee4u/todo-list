import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

     

    const updatedItems = [...this.state.items, newItem];
    this.setState ({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items: [],
    })
  } 

  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id)
    this.setState ({
      items: filteredItem
    })
  }

  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState ({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }
  render() {
    return (
      <div className="container">
        <div >
          <div className="col-10 mx-auto  col-md-8 mt-4" ></div>
          <h3 className="text-capitalize  text-center">todo input</h3>
          <TodoInput item ={this.state.item} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          clearList = {this.clearList}
          editItem={this.state.editItem}
          />

        <TodoList items = {this.state.items} 
        clearList ={this.clearList} 
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
        </div>
      </div>
    );
  }
}

export default App;
