import React, { Component } from 'react'
import classNames from 'classnames'
import './TodoList.css'
import circle from '../img/circle.svg';
import circleCheck from '../img/check-circle.svg'

class TodoList extends Component{
    render(){
        const { item, onClick } = this.props;
        // let className = 'TodoList';
        // if(item.isComplete){
        //     className+= ' TodoList-complete';
        // }

        let url = circleCheck;
        if(item.isComplete){
            url = circle;
        }

        return(
            <div className={classNames('TodoList',{
                'TodoList-complete': item.isComplete
            })}>
                <img src = {url} height={24} width = {24} alt="check-mark" onClick={onClick}/>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoList;