import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timeID = setInterval(
            ()=>this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date: new Date()});
    }
    render(){
        return(
            <div className='Clock'>
                <h2>It is {this.state.date.toLocaleDateString()} { this.state.date.toLocaleTimeString()}</h2>
                <p>Did you finish your tasks?</p>
            </div>
        )
    }
}

export default Clock;