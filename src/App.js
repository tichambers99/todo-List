import './App.css';

import TodoList from './components/TodoList';
// import Toggle from './components/Toggle';
import Clock from './components/Clock';
import { Component } from 'react';
import tickImng from './img/tick.svg'

class App extends Component {
  constructor(){
    super();
    this.state ={
      newItem: '',
      todoItems:  [
        {title: 'Go to school',isComplete: true},
        {title: 'Feed the dog',isComplete: true},
        {title: 'Learning Reactjs', isComplete: false}
      ]
    };
    // this.onItemClicked = this.onItemClicked.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item){
    return (event) =>{
      const {todoItems} = this.state;
      const isComplete = item.isComplete;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems:[
          ...todoItems.slice(0, index),
          {...item, isComplete: !isComplete},
          ...todoItems.slice(index+1)
        ]
    });
    }
  }

  onKeyUp(event){
    if(event.keyCode === 13){// enter keycode = 13
      let text = event.target.value;
      if(!text){return;}

      text = text.trim() // delete all frist or last space
      if(!text){return;}

      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]}
      )
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render(){
    const {todoItems, newItem} = this.state;
    return (
      <div className="App">
        <div className="text-header">todos</div>
        <Clock />
        <div className="todoItems">
        <div className='text-input'>
          <img src = {tickImng} height = {20} width = {20} alt="check-mark"></img>
          <input 
            type="text"
            placeholder="What needs to be done?" 
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
          />
        </div>
          {todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoList 
              key ={index}
              item={item} 
              onClick = {this.onItemClicked(item)}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
