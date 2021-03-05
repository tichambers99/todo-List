import React, { Component } from 'react'
import './TodoList.css'

class TodoList extends Component{
    render(){
        const { item } = this.props;
        console.log(item)
        let className = 'TodoList';
        if(item.isComplete){
            className+= ' TodoList-complete';
        }

        return(
            <div className={className}>
                <p>{item.title}  {item.deadline}</p>
            </div>
        )
    }
}

export default TodoList;