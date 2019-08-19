import React, { Component } from 'react'
import axios from 'axios'

const context= React.createContext()
const reducer=(prevState,action)=>{
    switch(action.type){
        case "TOGGLE":
            return { todos:prevState.todos.map(t=>{if(t._id===action.payload){t.complete=!t.complete}; return t})
        }
        case "REMOVE":
                return { todos:prevState.todos.filter(todo=>todo._id !== action.payload )
            }
        case "ADD":
        return{ todos:[...prevState.todos, action.payload]}
        default: 
        return prevState
    }
}

export  class Provider extends Component {
    state={
        todos:[ ],
    dispatch:(action)=>this.setState(prevState=>reducer(prevState,action))
    }
    
    componentDidMount(){
axios.get('http://localhost:3001/todos')
.then(res=>this.setState({todos:res.data}))
        
    }
    render() {
        return (
            <div>
               <context.Provider value={this.state}>
                   {this.props.children}
                   </context.Provider> 
            </div>
        )
    }
}

export const Consumer =context.Consumer