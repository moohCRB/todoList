import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItems from './component/todoitems/todoitems';
import AddItem from './component/additems/additems'

/*function App() {
  return (
    <div className="App">
      todolist app3
    </div>
  );
}*/
class App extends Component{
  state = {
    items : [
      {id:1,prenom:'mohamed',age:21},
      {id:2,prenom:'karim',age:23},
      {id:3,prenom:'said',age:25}
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id == id )
    items.splice(i,1);
    this.setState(items);
  }
  addItem =(item)  =>{
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }
  render(){
    return(
    <div className="App">
      Todolist App
      <TodoItems items = {this.state.items}
      deleteItem = {this.deleteItem} />
      <AddItem addItem = {this.addItem}/>
    </div>
    );
  }
}

export default App;
