import './App.css';

import TodoList from './components/TodoList';
// import Toggle from './components/Toggle';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import { Component } from 'react';
import tickImng from './img/tick.svg'

class App extends Component {
  constructor(){
    super();
    this.state ={
      filter: '',
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
    this.onClickShowActive = this.onClickShowActive.bind(this);
    this.onClickShowAll = this.onClickShowAll.bind(this);
    this.onClickShowCompleted = this.onClickShowCompleted.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
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


  onClickShowAll(){
    this.setState({
      filter: ""
    })
  }

  onClickShowActive(){
    this.setState({
      filter: "active"
    })
  }
  
  onClickShowCompleted(){
    this.setState({
      filter: "completed"
    })
  }

  clearCompleted(){

    var activeList = this.state.todoItems.filter(item => item.isComplete === false);
    this.setState({
      todoItems: activeList
    })
  }

  render(){
    const {todoItems, newItem, filter} = this.state;
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
            {/*show all the list*/}
            {filter==="" && todoItems.length > 0 && todoItems.map((item, index) => 
              <TodoList 
                key ={index}
                item={item} 
                onClick = {this.onItemClicked(item)}/>)
            }

            {/*show the active list*/}
            {filter==="active"
            && todoItems.length > 0
            && todoItems.filter(item => item.isComplete === false).map((item, index) => 
              <TodoList 
                key ={index}
                item={item} 
                onClick = {this.onItemClicked(item)}/>)
            }

            {/*show the completed list*/}
            {filter==="completed"
            && todoItems.length > 0
            && todoItems.filter(item => item.isComplete === true).map((item, index) => 
              <TodoList 
                key ={index}
                item={item} 
                onClick = {this.onItemClicked(item)}/>)
            }

            <div className="footer">
              <div>2 items left</div>
              <div>
                <button onClick={this.onClickShowAll}>
                  All
                </button>
                <button onClick={this.onClickShowActive}>
                  Active
                </button>
                <button onClick={this.onClickShowCompleted}>
                  Completed
                </button>
              </div>
              <button className="clear" onClick={this.clearCompleted}>
                Clear completed
              </button>
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
