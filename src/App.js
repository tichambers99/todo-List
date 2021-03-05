import './App.css';

import TodoList from './components/TodoList'
import Clock from './components/Clock';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      todoItems:  [
        {title: 'Nấu cơm', deadline: '2020/03/07'},
        {title: 'Rửa bát', deadline: '2020/03/09',isComplete: true},
        {title: 'Cho chó ăn', deadline: '2020/03/03',isComplete: true},
        {title: 'Học online', deadline: '2020/03/04'}
      ]
    };
  }

  // onItemClick(item){
  //   // const {todoItems} = this.state;
  //   // const isComplete = item.isComplete;
  //   // const index = todoItems.indexOf(item);
  //   return(event) => {
  //     console.log('clicked' + item);
  //     // this.setState({
  //     //   todoItems:[
  //     //     ...todoItems.slice(0, index),
  //     //     {...item, isComplete: !isComplete},
  //     //     ...todoItems.slice(index+1)
  //     //   ]
  //     // });
  //   }
  // }

  onItemClicked(item){
    return (event) => {
      console.log(item);
    }
  }

  render(){
    const {todoItems} = this.state;
    return (
      <div className="App">
        <Clock />
        {todoItems.length > 0 && todoItems.map((item, index) => 
          <TodoList 
            key ={index} 
            item={item} 
            onClick = {this.onItemClicked(item)}/>)
        }
      </div>
    );
  }
}

export default App;
